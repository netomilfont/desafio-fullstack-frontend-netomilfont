import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { ModalBackground, Modal, ModalHeader, ModalBody } from "./styles";
import { IModal } from "../ModalCadUser/types";
import { IUserUpdate } from "../../contexts/UserContext/types";
import { UserContext } from "../../contexts/UserContext";

const schema = yup.object({
  name: yup.string(),
  email: yup.string().email("O email deve ser válido!"),
  telefone: yup.string(),
});

const ModalOpenEditUser = ({ closeModal }: IModal) => {
  const [loading, setLoading] = useState(false);
  const { user } = useContext(UserContext);

  const { register, handleSubmit } = useForm<IUserUpdate>({
    resolver: yupResolver(schema),
  });

  const submit = async (data: IUserUpdate) => {
    updateContact(data, setLoading);
  };

  return (
    <>
      <ModalBackground className="modal__background">
        <Modal className="modal__container" onSubmit={handleSubmit(submit)}>
          <ModalHeader className="modal__header">
            <h4>Editar Contato</h4>
            <button type="button" onClick={() => closeModal(false)}>
              X
            </button>
          </ModalHeader>
          <ModalBody className="modal__body">
            <label htmlFor="name">Nome</label>
            <input
              type="text"
              {...register("name")}
              defaultValue={user?.name}
            />

            <label htmlFor="email">Email</label>
            <input
              type="text"
              {...register("email")}
              defaultValue={user?.email}
            />

            <label htmlFor="telefone">Telefone</label>
            <input
              type="text"
              {...register("telefone")}
              defaultValue={user?.telefone}
            />

            <button type="submit" disabled={loading}>
              {loading ? "Editando..." : "Editar perfil"}
            </button>
          </ModalBody>
        </Modal>
      </ModalBackground>
    </>
  );
};

export default ModalOpenEditUser;
