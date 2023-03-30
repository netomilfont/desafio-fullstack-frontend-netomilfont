export interface IUserResponse {
  id: string;
  name: string;
  email: string;
  telefone: string;
  createdAt: Date;
}

export interface IUserContext {}
export interface IDefaultContextProps {
  children: React.ReactNode;
}

export interface iLoginResponse {
  user: IUserResponse;
  token: string;
}
