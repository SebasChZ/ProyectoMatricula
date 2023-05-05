import "./index.css";
import { Layout } from "./components/Layout";
import { Route, Routes } from "react-router-dom";
import { LoginPage } from "./views/LoginPage";
import { ForgotPasswordPage } from "./views/ForgotPasswordPage";
import RequireAuth from "./components/RequireAuth";
import { RegisterProfessorPage } from "./views/RegisterProfessorPage";
import { Navigate } from "react-router-dom";

const ROLES = {
  User: 1,
  Professor: 2,
  Coordinator: 3,
  Assistant: 4,
  AssistantCA: 5,
};

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/*Public routes */}
        <Route path="/" element={<LoginPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />

        {/*Private routes */}
        {/* User routes */}
        {/* <Route element={<RequireAuth allowedRoles={[ROLES.User]} />}>
          <Route path="/user" element={<h1>User</h1>} />
        </Route> */}

        {/* Professor routes */}
        {/* <Route element={<RequireAuth allowedRoles={[ROLES.Professor]} />}>
          <Route path="/professor" element={<h1>Professor</h1>} />
        </Route> */}

        {/* Coordinator routes */}
        {/* <Route element={<RequireAuth allowedRoles={[ROLES.Coordinator]} />}>
          <Route path="/coordinator" element={<h1>Coordinator</h1>} />
        </Route> */}

        {/* Assistant routes */}
        {/* <Route element={<RequireAuth allowedRoles={[ROLES.Assistant, ROLES.AssistantCA]} />}>
          <Route path="/assistant" element={<h1>Assistant</h1>} />
        </Route> */}

        {/* AssistantCA routes */}
        <Route element={<RequireAuth allowedRoles={[ROLES.AssistantCA]} />}>
          <Route
            path="/registrar-profesor"
            element={<RegisterProfessorPage />}
          />
        </Route>

        {/*Catch all*/}
        <Route path="*" element={<h1>404 error</h1>} />
      </Route>
    </Routes>
  );
}
