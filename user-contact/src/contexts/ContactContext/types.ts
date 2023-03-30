export interface IContactRegister {
  name: string;
  email: string;
  telefone: string;
}

export interface IContactResponse {
  id: string;
  name: string;
  email: string;
  telefone: string;
  createdAt: Date;
}
