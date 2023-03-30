import React, { createContext, useEffect, useState } from "react";
import { ILoginDataForm } from "../../pages/Login/types";
import { IDefaultContextProps, IUserContext } from "./types";

export const UserContext = createContext({} as IUserContext);

export const UserProvider = ({ children }: IDefaultContextProps) => {
  const [user, setUser] = useState(null);

  const login = async (
    data: ILoginDataForm,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    try {
      setLoading(true);
    } catch (error) {}
  };

  return <UserContext.Provider>{children}</UserContext.Provider>;
};
