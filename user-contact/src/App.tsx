import Routes from "./routes";
import GlobalStyle from "./styles/global";
import { ToastContainer } from "react-toastify";
import { UserProvider } from "./contexts/UserContext";
import ContactProvider from "./contexts/ContactContext";

function App() {
  return (
    <div className="App">
      <UserProvider>
        <ContactProvider>
          <GlobalStyle />
          <Routes />
        </ContactProvider>
      </UserProvider>
      <ToastContainer />
    </div>
  );
}

export default App;
