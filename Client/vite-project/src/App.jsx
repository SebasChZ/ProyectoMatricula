import "./index.css";
import { Layout } from "./components/Layout";
import { Route, Routes } from "react-router-dom";
import { LoginPage } from "./views/LoginPage";
import { ForgotPasswordPage } from "./views/ForgotPasswordPage";
import RequireAuth from "./components/RequireAuth";
import { CreatePlan } from "./views/CreatePlan";
import { HomeSwitch } from "./components/HomeSwitch";
import { ProfessorHomePage } from "./views/ProfessorHomePage";
import { AssistantHomePage } from "./views/AssistantHomePage";
import { ViewStudentsPage } from "./views/ViewStudentsPage";
import { PlansViewPage } from "./views/PlansViewPage";
import { VerPlanPage } from "./views/VerPlanPage";
import { RegisterProfessorPage } from "./views/RegisterProfessorPage";
import { ModifyPlanTrabajoPage } from "./views/ModifyPlanTrabajoPage";

const ROLES = {
  Professor: 1597,
  Coordinator: 2264,
  Assistant: 3123,
  AssistantCA: 4478,
};

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/*Public routes */}
        <Route path="/" element={<LoginPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/unauthorized" element={<h1>Unauthorized</h1>} />

        {/*Private routes */}
        {/* User routes */}
        <Route
          element={
            <RequireAuth
              allowedRoles={[
                ROLES.Professor,
                ROLES.Coordinator,
                ROLES.Assistant,
                ROLES.AssistantCA,
              ]}
            />
          }
        >
          <Route path="/home-switch" element={<HomeSwitch />} />
        </Route>

        {/* Professor routes */}
        <Route
          element={
            <RequireAuth allowedRoles={[ROLES.Professor, ROLES.Coordinator]} />
          }
        >
          <Route path="/home-professor" element={<ProfessorHomePage />} />
          <Route path="/plans" element={<PlansViewPage />} />
          <Route path="/ver-plan" element={<VerPlanPage />} />
          <Route path="/crear-plan" element={<CreatePlan />} />
          <Route
            path="/modificar-plan"
            element={<ModifyPlanTrabajoPage />}
          />{" "}
          {/* This should not be here, it should be moved to just Coordinator routes */}
        </Route>

        {/* Coordinator routes */}
        <Route element={<RequireAuth allowedRoles={[ROLES.Coordinator]} />}>
          <Route path="/createPlan" element={<CreatePlan />} />
          <Route path="/viewStudents" element={<ViewStudentsPage />} />
        </Route>

        {/* Assistant routes */}
        <Route
          element={
            <RequireAuth allowedRoles={[ROLES.Assistant, ROLES.AssistantCA]} />
          }
        >
          <Route path="/home-assistant" element={<AssistantHomePage />} />
        </Route>

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
