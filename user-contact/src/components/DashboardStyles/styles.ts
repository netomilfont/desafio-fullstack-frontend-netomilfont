import styled from "styled-components";

export const Header = styled.header`
  border-bottom: 1px solid var(--color-grey-3);

  button {
    background-color: var(--color-grey-3);
    color: var(--color-grey-0);
    padding: 8px 16px;
    border: none;
    border-radius: 4px;
    transition: 0.3s;
  }

  .container__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    padding: 26px 15px;
    width: 90%;
  }

  .div__button {
    display: flex;
    gap: 5px;
    justify-content: flex-end;
  }

  @media (min-width: 1024px) {
    button:hover {
      background-color: var(--color-grey-2);
      transition: 0.3s;
    }

    .container__header {
      width: 60%;
      max-width: 950px;
    }
  }
`;

export const Logo = styled.h1`
  color: var(--color-grey-0);
  font-size: 1.8rem;
  font-weight: 600;
`;

export const SectionMain = styled.div`
  @media (min-width: 1024px) {
    display: flex;
    margin: 0 auto;
    width: 67%;
    max-width: 1036px;
    justify-content: space-around;
  }
`;

export const Section = styled.section`
  border-bottom: 1px solid var(--color-grey-3);

  h3 {
    color: var(--color-grey-0);
    font-weight: 700;
  }

  h4 {
    color: var(--color-grey-0);
    font-size: 0.875rem;
  }

  p {
    color: var(--color-grey-1);
    font-size: 0.75rem;
  }

  .container__section {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    margin: 0 auto;
    padding: 45px 0px;
    width: 90%;
  }

  .delete__perfil {
    background-color: var(--color-grey-3);
    color: red;
    border: none;
    padding: 3px;
    border-radius: 3px;
  }

  .delete__perfil:hover {
    background-color: red;
    color: var(--color-grey-3);
  }

  @media (min-width: 1024px) {
    border-bottom: none;
    border-right: 1px solid var(--color-grey-3);

    .container__section {
      justify-content: space-between;
      align-items: flex-start;
      width: 99%;
    }
  }
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 23px;
  margin: 0 auto;
  padding: 34px 12px;
  width: 90%;

  .div__main {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
  }

  .div__main svg {
    cursor: pointer;
  }

  .div__main rect {
    transition: 0.3s;
  }

  .div__main rect:hover {
    fill: var(--color-grey-2);
    transition: 0.3s;
  }

  h3 {
    color: var(--color-grey-0);
    font-weight: 700;
  }

  h4 {
    color: var(--color-grey-0);
    font-size: 0.875rem;
  }

  ul {
    width: 100%;
    box-sizing: border-box;
    border-radius: 4px;
    background-color: var(--color-secondary-blue);
    padding: 22px 9px;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  ul li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    padding: 12px;
    background-color: #0f111b;
    border-radius: 4px;
    height: 49px;
    transition: 0.3s;
  }

  ul li:hover {
    background-color: var(--color-grey-2);
    transition: 0.3s;
  }

  ul li h4 {
    font-size: 0.875rem;
    color: var(--color-grey-0);
    font-weight: 700;
  }

  ul li p {
    font-size: 0.75rem;
    color: #e6d06c;
  }

  .container__infoTech {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }

  .container__infoTech svg:hover {
    cursor: pointer;
    z-index: -1;
  }

  .email__user {
    display: none;
  }

  button {
    background-color: transparent;
    border: none;
    padding: 0;
  }

  .edit__contact {
    background-color: var(--color-grey-1);
    color: var(--color-grey-0);
    padding: 4px;
    border-radius: 3px;
  }

  .edit_contact:hover {
    background-color: var(--color-primary-focus);
  }

  @media (min-width: 1024px) {
    width: 60%;
    margin: 0 0;

    .email__user {
      display: flex;
    }
  }
`;
