import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { ILoginDataForm } from "../../pages/Login/types";
import { IRegisterForm } from "../../pages/Register/types";
import api from "../../services/api";
import {
  IDefaultContextProps,
  iLoginResponse,
  IUserContext,
  IUserResponse,
} from "./types";

export const UserContext = createContext({} as IUserContext);

export const UserProvider = ({ children }: IDefaultContextProps) => {
  const [user, setUser] = useState<IUserResponse | null>(null);

  const navigate = useNavigate();

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
      setUser(responseUser.data);
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
    <UserContext.Provider value={{ user, login, registered, logout }}>
      {children}
    </UserContext.Provider>
  );
};
