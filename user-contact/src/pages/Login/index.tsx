import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import {
  Form,
  ModalLogin,
  Title,
  Input,
} from "../../components/FormLogin/style";
import * as yup from "yup";
import { useContext, useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { ILoginDataForm } from "./types";
import { UserContext } from "../../contexts/UserContext";

const schema = yup.object({
  email: yup
    .string()
    .email("O email deve ser válido!")
    .required("Campo de email obrigatório!"),
  password: yup.string().required("Campo de senha é obrigatório!"),
});

const Login = () => {
  const { login } = useContext(UserContext);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginDataForm>({
    resolver: yupResolver(schema),
  });

  const formSubmit = async (data: ILoginDataForm) => {
    login(data, setLoading);
  };

  function registerUserButton() {
    navigate("/register");
  }

  return (
    <>
      <ModalLogin onSubmit={handleSubmit(formSubmit)}>
        <Title>User Contact</Title>
        <div className="container__form">
          <div className="div__form">
            <Form>
              <h3>Login</h3>

              <label htmlFor="email">Email</label>
              <Input type="email" id="email" {...register("email")} />
              <p>{errors.email?.message}</p>

              <label htmlFor="password">Senha</label>
              <Input type="password" id="password" {...register("password")} />
              <p>{errors.password?.message}</p>

              <button type="submit" disabled={loading}>
                {loading ? "Entrando..." : "Entrar"}
              </button>
            </Form>
            <div className="div__register">
              <span>Ainda não possui uma conta?</span>
              <button
                className="btn__register"
                onClick={() => registerUserButton()}
              >
                Cadastre-se
              </button>
            </div>
          </div>
        </div>
      </ModalLogin>
    </>
  );
};

export default Login;
