import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { ModalBackground, Modal, ModalHeader, ModalBody } from "./styles";
import { IContactUpdate } from "../../contexts/ContactContext/types";
import { IModal } from "../ModalCadUser/types";
import { ContactContext } from "../../contexts/ContactContext";
import { UserContext } from "../../contexts/UserContext";

const schema = yup.object({
  name: yup.string(),
  email: yup.string().email("O email deve ser válido!"),
  telefone: yup.string(),
});

const ModalUpdateContact = ({ closeModal }: IModal) => {
  const { updateContact } = useContext(ContactContext);
  const { contactEdit } = useContext(UserContext);
  const [loading, setLoading] = useState(false);

  const { register, handleSubmit } = useForm<IContactUpdate>({
    resolver: yupResolver(schema),
  });

  const submit = async (data: any) => {
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
              defaultValue={contactEdit?.name}
            />

            <label htmlFor="email">Email</label>
            <input
              type="text"
              {...register("email")}
              defaultValue={contactEdit?.email}
            />

            <label htmlFor="telefone">Telefone</label>
            <input
              type="text"
              {...register("telefone")}
              defaultValue={contactEdit?.telefone}
            />

            <button type="submit" disabled={loading}>
              {loading ? "Editando..." : "Editar contato"}
            </button>
          </ModalBody>
        </Modal>
      </ModalBackground>
    </>
  );
};

export default ModalUpdateContact;
