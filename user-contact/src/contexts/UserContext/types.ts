export interface IUserContext {}
export interface IDefaultContextProps {
  children: React.ReactNode;
}

export interface iLoginResponse {
  user: IUser;
  token: string;
}
