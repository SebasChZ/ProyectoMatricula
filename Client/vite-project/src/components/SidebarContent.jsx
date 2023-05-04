import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import EventNoteIcon from "@mui/icons-material/EventNote";
import GroupIcon from "@mui/icons-material/Group";

export function SidebarContent({ userType }) {
  let options;

  switch (userType) {
    case 1: // Professor
      options = (
        <>
          <li>
            <Link
              to="/"
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <HomeIcon />
              <span className="ml-3">Inicio</span>
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <EventNoteIcon />
              <span className="ml-3">Planes de trabajo</span>
            </Link>
          </li>
          <li>
            <Link
              to="/ForgotPassword"
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <GroupIcon />
              <span className="ml-3">Estudiantes</span>
            </Link>
          </li>
        </>
      );
      break;
    case 2: // Assistant
      options = (
        <>
          <li>
            <Link
              to="/"
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <HomeIcon />
              <span className="ml-3">Inicio</span>
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <EventNoteIcon />
              <span className="ml-3">Planes de trabajo</span>
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <GroupIcon />
              <span className="ml-3">Profesores</span>
            </Link>
          </li>
        </>
      );
      break;
    default:
      options = <li>No options available</li>;
  }

  return <>{options}</>;
}
