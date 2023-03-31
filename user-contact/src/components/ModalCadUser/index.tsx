import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { ModalBackground, Modal, ModalHeader, ModalBody } from "./styles";
import { IModal } from "./types";
import { ContactContext } from "../../contexts/ContactContext";
import { IContactRegister } from "../../contexts/ContactContext/types";

const schema = yup.object({
  name: yup.string().required("O campo de nome é obrigatório!"),
  email: yup
    .string()
    .email("O email deve ser válido!")
    .required("Campo de email obrigatório!"),
  telefone: yup.string().required("O campo de telefone é obrigatório!"),
});

const ModalCadContact = ({ closeModal }: IModal) => {
  const [loading, setLoading] = useState(false);
  const { registerContact } = useContext(ContactContext);

  const { register, handleSubmit } = useForm<IContactRegister>({
    resolver: yupResolver(schema),
  });

  const submit = async (data: IContactRegister) => {
    registerContact(data, setLoading);
  };

  return (
    <>
      <ModalBackground className="modal__background">
        <Modal className="modal__container" onSubmit={handleSubmit(submit)}>
          <ModalHeader className="modal__header">
            <h4>Cadastrar Contato</h4>
            <button type="button" onClick={() => closeModal(false)}>
              X
            </button>
          </ModalHeader>
          <ModalBody className="modal__body">
            <label htmlFor="name">Nome</label>
            <input type="text" {...register("name")} />

            <label htmlFor="email">Email</label>
            <input type="text" {...register("email")} />

            <label htmlFor="telefone">Telefone</label>
            <input type="text" {...register("telefone")} />

            <button type="submit" disabled={loading}>
              {loading ? "Cadastrando..." : "Cadastrar contato"}
            </button>
          </ModalBody>
        </Modal>
      </ModalBackground>
    </>
  );
};

export default ModalCadContact;
