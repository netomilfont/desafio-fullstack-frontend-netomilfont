import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login";

const RoutesMain = () => (
  <Routes>
    <Route index path="/" element={<Login />} />
    <Route path="/register" />
  </Routes>
);

export default RoutesMain;
