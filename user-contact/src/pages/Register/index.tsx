import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Form, Title, Input } from "../../components/FormLogin/style";
import {
  ModalRegister,
  ButtonPrimary,
} from "../../components/FormRegister/style";
import { UserContext } from "../../contexts/UserContext";
import * as yup from "yup";
import YupPassword from "yup-password";
YupPassword(yup);

export interface IRegisterForm {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  telefone: string;
}

const schema = yup.object({
  name: yup.string().required("O seu nome é obrigatório!"),
  email: yup
    .string()
    .email("Deve ser inserido um email válido!")
    .required("Campo de email obrigatório!"),
  password: yup
    .string()
    .min(10, "A senha deve conter no minimo 10 caracteres.")
    .minNumbers(1, "A senha deve conter pelo menos um número")
    .required("A sua senha é obrigatória!"),
  confirmPassword: yup
    .string()
    .oneOf(
      [yup.ref("password")],
      "Confirmação de senha deve ser igual a senha"
    ),
  telefone: yup.string().required("O número de telefone é obrigatório!"),
});

const Register = () => {
  const { registered } = useContext(UserContext);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegisterForm>({
    resolver: yupResolver(schema),
  });

  const submit = async (data: IRegisterForm) => {
    registered(data);
  };

  function backToPageLogin() {
    navigate("/");
  }

  return (
    <div>
      <>
        <ModalRegister>
          <div className="header__form">
            <Title>User Contact</Title>
            <button name="Voltar" onClick={() => backToPageLogin()}>
              voltar
            </button>
          </div>
          <div className="container__form">
            <div className="div__form">
              <Form onSubmit={handleSubmit(submit)}>
                <h3>Crie sua conta</h3>
                <span>é rápida e gratuita!</span>

                <label htmlFor="name">Nome</label>
                <input
                  id="name"
                  type="text"
                  placeholder="Digite seu nome aqui"
                  {...register("name")}
                />
                <p>{errors.name?.message}</p>

                <label htmlFor="email">Email</label>
                <Input
                  type="email"
                  id="email"
                  placeholder="Digite seu email aqui"
                  {...register("email")}
                />
                <p>{errors.email?.message}</p>

                <label htmlFor="password">Senha</label>
                <Input
                  type="password"
                  id="password"
                  placeholder="Digite sua senha aqui"
                  {...register("password")}
                />
                <p>{errors.password?.message}</p>

                <label htmlFor="confirm-password">Confirmar Senha</label>
                <Input
                  type="password"
                  id="confirm-password"
                  placeholder="Digite sua senha aqui"
                  {...register("confirmPassword")}
                />
                <p>{errors.confirmPassword?.message}</p>

                <label htmlFor="contact">Telefone</label>
                <input
                  id="telefone"
                  type="text"
                  placeholder="Digite seu telefone aqui"
                  {...register("telefone")}
                />
                <p>{errors.telefone?.message}</p>

                <ButtonPrimary type="submit">Cadastrar-se</ButtonPrimary>
              </Form>
            </div>
          </div>
        </ModalRegister>
      </>
    </div>
  );
};

export default Register;
