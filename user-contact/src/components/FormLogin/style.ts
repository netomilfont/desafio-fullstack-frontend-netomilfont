import styled from "styled-components";

export const ModalLogin = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  margin-bottom: 20px;

  span {
    font-size: 0.625rem;
    text-align: center;
    width: 100%;
    margin-bottom: 17px;
    color: var(--color-grey-1);
  }

  .container__form {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .div__form {
    background-color: var(--color-grey-3);
    box-shadow: 0px 3.20867px 32.0867px -8.02168px rgba(0, 0, 0, 0.25);
    border-radius: 3.20867px;
    display: flex;
    flex-direction: column;
    width: 93%;
  }

  .div__register {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    margin-bottom: 25px;
    width: 100%;
    padding: 0px 18px 0 18px;
    box-sizing: border-box;
  }

  .btn__register {
    background-color: var(--color-grey-1);
    color: var(--color-grey-0);
    border: var(--color-grey-1);
    margin-bottom: 0px;
    border-radius: 4.06066px;
    width: 100%;
    height: 39px;
  }

  @media (min-width: 1024px) {
    .container__form {
      width: 369px;
    }

    .header__form {
      width: 29%;
    }

    .header__form button:hover {
      background-color: var(--color-grey-2);
      transition: 0.3s;
    }
  }

  @keyframes appearFromTopLeft {
    0% {
      opacity: 0;
      transform: translate(-30%, -30%);
    }

    100% {
      opacity: 1;
      transform: translate(0, 0);
    }
  }
`;

export const Title = styled.h1`
  color: var(--color-primary);
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 20px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  color: white;
  padding: 25px 18px 0 18px;
  gap: 10px;

  h3 {
    margin-bottom: 23px;
    font-size: 0.875rem;
    font-weight: 700;
    color: var(--color-grey-0);
  }

  label {
    font-size: 0.625rem;
    text-align: start;
    width: 100%;
    color: var(--color-grey-0);
  }

  input,
  select {
    width: 100%;
    height: 39px;
    outline: 0;
    border: 0;
    background-color: var(--color-grey-2);
    border: 0.9772px solid var(--color-grey-0);
    border-radius: 3.20867px;
    padding: 8px 13px;
    box-sizing: border-box;
    color: var(--color-grey-0);
  }

  input::placeholder {
    color: var(--color-grey-1);
  }

  button {
    background-color: var(--color-primary);
    color: var(--color-grey-0);
    border: 1.2182px solid var(--color-primary);
    border-radius: 4.06066px;
    width: 100%;
    height: 39px;
    font-size: 0.875rem;
    font-weight: 500;
    margin-bottom: 15px;
  }

  p {
    font-size: 0.625rem;
    text-align: start;
    width: 100%;
    color: var(--color-negative);
  }
`;

export const Input = styled.input`
  background-color: var(--color-grey-2);
`;
