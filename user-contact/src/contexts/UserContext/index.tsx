import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { ILoginDataForm } from "../../pages/Login/types";
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

  return (
    <UserContext.Provider value={{ user, login }}>
      {children}
    </UserContext.Provider>
  );
};
