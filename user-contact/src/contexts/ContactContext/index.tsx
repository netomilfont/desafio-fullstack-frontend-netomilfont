import api from "../../services/api";
import {
  IContactContext,
  IContactRegister,
  IContactResponse,
  IContactUpdate,
} from "./types";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { useContext, createContext, useState } from "react";
import { UserContext } from "../UserContext";
import { IDefaultContextProps } from "../UserContext/types";

export const ContactContext = createContext({} as IContactContext);

const ContactProvider = ({ children }: IDefaultContextProps) => {
  const { contacts, setContacts, contactEdit } = useContext(UserContext);
  const [registerModal, setRegisterModal] = useState(false);
  const [editModal, setEditModal] = useState(false);

  const registerContact = async (
    data: IContactRegister,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    try {
      setLoading(true);
      const token = localStorage.getItem("@TOKENUSER");

      const responseContacts = await api.post<IContactResponse>(
        "/contacts",
        data,
        {
          headers: { Authorization: `Bearer ${token as string}` },
        }
      );

      const newListContacts = [
        ...contacts,
        {
          name: responseContacts.data.name,
          email: responseContacts.data.email,
          telefone: responseContacts.data.telefone,
          id: responseContacts.data.id,
          createdAt: responseContacts.data.createdAt,
        },
      ];

      toast.success("Contato cadastrada com sucesso!", {
        autoClose: 1500,
        theme: "dark",
      });

      setContacts(newListContacts);
      setRegisterModal(false);
    } catch (error) {
      toast.error("O seu contato não foi cadastrada, algo aconteceu!", {
        autoClose: 1500,
        theme: "dark",
      });
    } finally {
      setLoading(false);
    }
  };

  const deleteContact = async (
    userContact: IContactResponse,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    try {
      setLoading(true);
      const token = localStorage.getItem("@TOKENUSER");
      const contact = contacts.filter((cont) => cont !== userContact);

      await api.delete(`/contacts/${userContact.id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      toast.success("Contato excluído com sucesso!", {
        autoClose: 1500,
        theme: "dark",
      });
      setContacts(contact);
    } catch (error) {
      toast.error("Contato não foi excluída!", {
        autoClose: 1500,
        theme: "dark",
      });
    } finally {
      setLoading(false);
    }
  };

  const updateContact = async (
    data: IContactUpdate,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    try {
      setLoading(true);
      const token = localStorage.getItem("@TOKENUSER");

      await api.patch<IContactResponse>(`/contacts/${contactEdit?.id}`, data, {
        headers: { Authorization: `Bearer ${token}` },
      });

      const contactsUser = await api.get<IContactResponse[]>("/contacts/user", {
        headers: { Authorization: `Bearer ${token}` },
      });

      setContacts(contactsUser.data);

      toast.success("Contato editado com sucesso!", {
        autoClose: 1500,
        theme: "dark",
      });
    } catch (error) {
      toast.error("Contato não foi editado!", {
        autoClose: 1500,
        theme: "dark",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <ContactContext.Provider
      value={{
        registerContact,
        registerModal,
        setRegisterModal,
        deleteContact,
        editModal,
        setEditModal,
        updateContact,
      }}
    >
      {children}
    </ContactContext.Provider>
  );
};

export default ContactProvider;
