import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import EventNoteIcon from "@mui/icons-material/EventNote";
import GroupIcon from "@mui/icons-material/Group";
import { useAuth } from "../hooks/useAuth";
import { useLocation, Navigate } from "react-router-dom";

function Item({ children }) {
  return (
    <li className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
      {children}
    </li>
  );
}

export function SidebarContent() {
  const { auth } = useAuth();
  const location = useLocation();

  let options;
  options = auth?.roles?.find((role) => [1597, 2264].includes(role)) ? (
    <>
      <Item>
        <Link to="/home-switch" className="flex items-center space-x-2">
          <HomeIcon />
          <span>Inicio</span>
        </Link>
      </Item>
      <Item>
        <Link to="/plans" className="flex items-center space-x-2">
          <EventNoteIcon />
          <span>Planes de trabajo</span>
        </Link>
      </Item>
      <Item>
        <Link to="/crear-plan" className="flex items-center space-x-2">
          <GroupIcon />
          <span>Crear Plan</span>
        </Link>
      </Item>
      <Item>
        <Link to="#" className="flex items-center space-x-2">
          <GroupIcon />
          <span>Estudiantes</span>
        </Link>
      </Item>
    </>
  ) : auth?.roles?.find((role) => [3123, 4478].includes(role)) ? (
    <>
      <Item>
        <Link to="/home-switch" className="flex items-center space-x-2">
          <HomeIcon />
          <span>Inicio</span>
        </Link>
      </Item>
      <Item>
        <Link to="/plans" className="flex items-center space-x-2">
          <EventNoteIcon />
          <span>Planes de trabajo</span>
        </Link>
      </Item>
      <Item>
        <Link to="/profesores" className="flex items-center space-x-2">
          <GroupIcon />
          <span>Profesores</span>
        </Link>
      </Item>
    </>
  ) : auth?.email ? (
    <Navigate to="/unauthorized" state={{ from: location }} replace />
  ) : (
    <Navigate to="/" state={{ from: location }} replace />
  );

  return <>{options}</>;
}
