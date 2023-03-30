import { useContext, useState } from "react";
import {
  Header,
  Logo,
  Section,
  Main,
  SectionMain,
} from "../../components/DashboardStyles/styles";
import ModalCadContact from "../../components/ModalCadUser";
import { UserContext } from "../../contexts/UserContext";

const Dashboard = () => {
  const [loading, setLoading] = useState(false);
  const { user, logout, contacts } = useContext(UserContext);

  return (
    <>
      <Header>
        <div className="container__header">
          <Logo>User Contact</Logo>
          <button onClick={() => logout()}>Sair</button>
        </div>
      </Header>
      <SectionMain>
        <Section>
          <div className="container__section">
            <h3>Olá, {user?.name} </h3>
            <p>Email: {user?.email}</p>
            <p>Telefone: {user?.telefone}</p>
          </div>
        </Section>
        <Main>
          <div className="div__main">
            <h3>Contacts</h3>
            <svg
              width="34"
              height="32"
              viewBox="0 0 34 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="0.718506"
                width="32.4853"
                height="32"
                rx="4"
                fill="#212529"
              />
              <path
                d="M16.1759 21.5625H18.3093V17.3281H22.6079V15.2266H18.3093V11H16.1759V15.2266H11.8853V17.3281H16.1759V21.5625Z"
                fill="white"
              />
            </svg>
          </div>
          <ul>
            {contacts.length === 0 ? (
              <h4>Você não possui nenhum contato cadastrado na plataforma!</h4>
            ) : (
              contacts.map((contact, index) => (
                <li key={index} id={contact.id}>
                  <h4>{contact.name}</h4>
                  <div className="container__infoTech">
                    <p className="email__user">{contact.email}</p>
                    <p className="email__user">-</p>
                    <p>{contact.telefone}</p>
                    <button disabled={loading}>
                      {loading ? (
                        <p>x</p>
                      ) : (
                        <svg
                          width="14"
                          height="12"
                          viewBox="0 0 14 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M2.39993 12C2.07076 12 1.78273 11.9 1.53585 11.7C1.28897 11.5 1.16553 11.2667 1.16553 11V1.5H0.322021V0.5H4.18981V0H9.62118V0.5H13.489V1.5H12.6455V11C12.6455 11.2667 12.522 11.5 12.2751 11.7C12.0283 11.9 11.7402 12 11.4111 12H2.39993ZM11.4111 1.5H2.39993V11H11.4111V1.5ZM4.58071 9.56667H5.81511V2.91667H4.58071V9.56667ZM7.99588 9.56667H9.23028V2.91667H7.99588V9.56667ZM2.39993 1.5V11V1.5Z"
                            fill="white"
                            fillOpacity="0.8"
                          />
                        </svg>
                      )}
                    </button>
                  </div>
                </li>
              ))
            )}
          </ul>
        </Main>
        {cadModal && <ModalCadContact closeModal={setCadModal} />}
      </SectionMain>
    </>
  );
};

export default Dashboard;
