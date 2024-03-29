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

export interface IContactUpdate {
  name?: string;
  email?: string;
  telefone?: string;
}

export interface IContactContext {
  registerContact: (
    data: IContactRegister,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) => void;
  registerModal: boolean;
  setRegisterModal: React.Dispatch<React.SetStateAction<boolean>>;
  deleteContact: (
    data: IContactResponse,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) => void;
  editModal: boolean;
  setEditModal: React.Dispatch<React.SetStateAction<boolean>>;
  updateContact: (
    data: IContactResponse,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) => void;
}
