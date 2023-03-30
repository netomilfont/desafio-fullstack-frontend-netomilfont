import { createContext } from "vm";
import api from "../../services/api";
import { IContactRegister, IContactResponse } from "./types";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { useContext } from "react";
import { UserContext } from "../UserContext";
import { IDefaultContextProps } from "../UserContext/types";

export const ContactContext = createContext();

const ContactProvider = ({ children }: IDefaultContextProps) => {
  const { contacts, setContacts } = useContext(UserContext);

  const registerContact = async (
    data: IContactRegister,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    try {
      setLoading(true);
      const token = localStorage.getItem("@TOKENUSER");

      const responseContacts = await api.post<IContactResponse>(
        "/contacts/user",
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

      toast.success("Tecnologia cadastrada com sucesso!", {
        autoClose: 1500,
        theme: "dark",
      });

      setContacts(newListContacts);
    } catch (error) {
      toast.error("O seu contato não foi cadastrada, algo aconteceu!", {
        autoClose: 1500,
        theme: "dark",
      });
    } finally {
      setLoading(false);
    }
  };
};

export default ContactProvider;
