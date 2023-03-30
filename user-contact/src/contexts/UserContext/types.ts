import { ILoginDataForm } from "../../pages/Login/types";

export interface IUserResponse {
  id: string;
  name: string;
  email: string;
  telefone: string;
  createdAt: Date;
}

export interface IUserContext {
  user: IUserResponse | null;
  login: (
    data: ILoginDataForm,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) => void;
}

export interface IDefaultContextProps {
  children: React.ReactNode;
}

export interface iLoginResponse {
  userId: string;
  token: string;
}
