import Routes from "./routes";
import GlobalStyle from "./styles/global";
import { ToastContainer } from "react-toastify";
import { UserProvider } from "./contexts/UserContext";

function App() {
  return (
    <div className="App">
      <UserProvider>
        <GlobalStyle />
        <Routes />
      </UserProvider>
      <ToastContainer />
    </div>
  );
}

export default App;
