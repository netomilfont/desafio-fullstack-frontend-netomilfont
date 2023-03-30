import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { ILoginDataForm } from "../../pages/Login/types";
import { IRegisterForm } from "../../pages/Register";
import api from "../../services/api";
import { IContactResponse } from "../ContactContext/types";
import {
  IDefaultContextProps,
  iLoginResponse,
  IUserContext,
  IUserResponse,
} from "./types";

export const UserContext = createContext({} as IUserContext);

export const UserProvider = ({ children }: IDefaultContextProps) => {
  const [user, setUser] = useState<IUserResponse | null>(null);
  const [contacts, setContacts] = useState<IContactResponse[]>([]);
  const [currentRoute, setCurrentRoute] = useState<string | null>(null);

  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const token = localStorage.getItem("@TOKENUSER");
      if (token) {
        try {
          const userId = localStorage.getItem("@USERID");
          const responseUser = await api.get(`/users/${userId}`, {
            headers: { Authorization: `Bearer ${token}` },
          });
          const contactsUser = await api.get<IContactResponse[]>(
            "/contacts/user",
            {
              headers: { Authorization: `Bearer ${token}` },
            }
          );
          setUser(responseUser.data);
          setContacts(contactsUser.data);
          navigate(currentRoute ? currentRoute : "/dashboard");
        } catch (error) {
          localStorage.removeItem("@TOKEN");
          localStorage.removeItem("@USERID");
          navigate("/");
        }
      }
    })();
  }, []);

  const login = async (
    data: ILoginDataForm,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    try {
      setLoading(true);
      const response = await api.post<iLoginResponse>("/login", data);
      localStorage.setItem("@TOKENUSER", response.data.token);
      localStorage.setItem("@USERID", response.data.userId);
      const token = response.data.token;
      const userId = response.data.userId;
      const responseUser = await api.get(`/users/${userId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const contactsUser = await api.get<IContactResponse[]>("/contacts/user", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setUser(responseUser.data);
      setContacts(contactsUser.data);
      setTimeout(() => {
        navigate("/dashboard");
      }, 1500);
    } catch (error) {
      toast.error("Ops! Alguma coisa deu errado. Tente novamente.", {
        autoClose: 1500,
        theme: "dark",
      });
    } finally {
      setLoading(false);
    }
  };

  const registered = async (data: IRegisterForm) => {
    try {
      await api.post<IUserResponse>("/users", data);
      toast.success("A sua conta foi criada.", {
        autoClose: 1500,
        theme: "dark",
      });

      setTimeout(() => {
        navigate("/");
      }, 1500);
    } catch (error) {
      toast.error("Ops! Algo deu errado", {
        autoClose: 1500,
        theme: "dark",
      });
    }
  };

  const logout = async () => {
    toast.success("Você foi deslogado.", {
      autoClose: 1500,
      theme: "dark",
    });
    setUser(null);
    localStorage.removeItem("@TOKENUSER");
    localStorage.removeItem("@USERID");
    setTimeout(() => {
      navigate("/");
    }, 1500);
  };

  return (
    <UserContext.Provider
      value={{ user, login, registered, logout, contacts, setContacts }}
    >
      {children}
    </UserContext.Provider>
  );
};
