import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login";

const RoutesMain = () => (
  <Routes>
    <Route index path="/" element={<Login />} />
    <Route index path="/register" />
  </Routes>
);

export default RoutesMain;
