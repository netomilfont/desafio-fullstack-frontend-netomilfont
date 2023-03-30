import styled from "styled-components";

export const ModalRegister = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100%;
  animation: appearFromTopLeft 1s;
  margin-bottom: 20px;

  .header__form {
    display: flex;
    width: 93%;
    justify-content: space-between;
    align-items: center;
    margin: 20px 0;
  }

  .header__form h1 {
    margin-bottom: 0;
  }

  .header__form button {
    background-color: var(--color-grey-3);
    color: var(--color-grey-0);
    padding: 8px 16px;
    border: none;
    border-radius: 4px;
    transition: 0.3s;
    font-size: 0.675rem;
  }

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
      width: 370px;
    }

    .header__form {
      width: 340px;
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

export const ButtonPrimary = styled.button`
  background-color: var(--color-primary);
  color: var(--color-grey-0);
  border: 1.2182px solid var(--color-primary);
  border-radius: 4.06066px;
  width: 100%;
  height: 39px;
  font-size: 0.875rem;
  font-weight: 500;
  margin-bottom: 15px;
`;
