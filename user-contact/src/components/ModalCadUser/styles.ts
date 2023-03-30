import styled from "styled-components";

export const ModalBackground = styled.div`
  width: 100vw;
  height: 100vh;
  top: 0;
  position: fixed;
  z-index: 1001;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const Modal = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: var(--color-grey-3);
  box-sizing: border-box;
  width: 296px;
  height: 300px;
  border-radius: 4px;
`;

export const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 89%;
  padding: 9px 16px;
  background-color: var(--color-grey-2);
  border-radius: 4px 4px 0 0;

  h4 {
    color: var(--color-grey-0);
    font-weight: 700;
    font-size: 0.85rem;
  }

  button {
    cursor: pointer;
    background-color: transparent;
    border: none;
    color: var(--color-grey-1);
  }
`;

export const ModalBody = styled.div`
  background-color: var(--color-grey-3);
  width: 89%;
  display: flex;
  flex-direction: column;
  gap: 8px;

  label {
    display: block;
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
    cursor: pointer;
  }

  button:hover {
    background-color: var(--color-primary-focus);
  }
`;
