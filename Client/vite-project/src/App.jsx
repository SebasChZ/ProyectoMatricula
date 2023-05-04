import { Sidebar } from "./components/Sidebar";
import "./index.css";
import { Route, Routes } from "react-router-dom";
import { LoginPage } from "./views/LoginPage";
import { ForgotPasswordPage } from "./views/ForgotPasswordPage";

export default function App() {
  return (
    <>
      <div>
        <Sidebar />
        <div className="sm:ml-[256px]">
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/about" element={<h1>About</h1>} />
            <Route path="/ForgotPassword" element={<ForgotPasswordPage />} />
          </Routes>
        </div>
      </div>
    </>
  );
}
