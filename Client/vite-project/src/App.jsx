
import { Sidebar } from "./components/Sidebar";
import "./index.css";
import { Route, Routes } from "react-router-dom";
import { LoginPage } from "./views/LoginPage";
import { ForgotPasswordPage } from "./views/ForgotPasswordPage";
import { createContext } from "react";
import { useState } from "react";

export default function App() {
  const [visibility, setVisibility] = useState("invisible");

  function changeVisibility(visibility) {
    setVisibility(visibility);
  }

  return (
    <>
      <div>
        <LoginPage changeVisibility={changeVisibility} />
        <Sidebar visibility={visibility} />
        <div className="sm:ml-[256px]">
          <Routes>
            <Route path="/inicio" element={<h1>Inicio</h1>} />
            <Route path="/planes" element={<h1>Planes</h1>} />
            <Route path="/estudiantes" element={<h1>Estudiantes</h1>} />
            <Route path="/forgotPassword" element={<ForgotPasswordPage />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

