import { createContext } from "vm";
import api from "../../services/api";
import { IContactRegister } from "./types";

export const ContactContext = createContext();

const ContactProvider = ({ children }) => {
  const registerContact = async (
    data: IContactRegister,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    try {
      setLoading(true);
      const token = localStorage.getItem("@TOKENUSER");

      const responseContacts = await api.post<>("/contacts", data, {
        headers: { Authorization: `Bearer ${token as string}` },
      });

      const newListContacts = [
        ...contactLists,
        {
          nome: responseContacts.data,
        },
      ];
    } catch (error) {}
  };
};

export default ContactProvider;
