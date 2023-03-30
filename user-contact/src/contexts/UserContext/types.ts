import { ILoginDataForm } from "../../pages/Login/types";
import { IRegisterForm } from "../../pages/Register/types";

export interface IUserResponse {
  id: string;
  name: string;
  email: string;
  telefone: string;
  createdAt: Date;
}

export interface IDefaultContextProps {
  children: React.ReactNode;
}

export interface iLoginResponse {
  userId: string;
  token: string;
}

export interface IUserContext {
  user: IUserResponse | null;
  login: (
    data: ILoginDataForm,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) => void;
  registered: (data: IRegisterForm) => void;
  logout: () => void;
}
