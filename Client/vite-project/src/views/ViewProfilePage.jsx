import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { EditProfessorPage } from "./EditProfessorPage";

const professorRoute = "http://localhost:3500/professor";

export function ViewProfilePage() {
  const locationx = useLocation();
  const professor = locationx.state?.consultProfessors;

  const navigate = useNavigate(); // Add this line

  console.log(professor);

  if (!professor) {
    return <div>No professor information available</div>;
  }

  // Access the professor properties like firstName, lastName, city, etc.
  const {
    code,
    firstName,
    lastName1,
    lastName2,
    branch,
    officePhoneNumber,
    email,
    count,
    status,
    phoneNumber,
  } = professor;

  const [showModal, setShowModal] = useState(status ? "Activo" : "Inactivo");

  const handleToggleStatus = async () => {
    event.preventDefault();
    try {
      if (professor.status) {
        // Make the API request to disable the professor
        await axios.put(`${professorRoute}/disable/${code}`);
        // Handle any success logic here
        alert("Professor disabled successfully!");
      } else {
        // Make the API request to enable the professor
        await axios.put(`${professorRoute}/enable/${code}`);
        // Handle any success logic here
        alert("Professor enabled successfully!");
      }

      // Update the professor's status in the state
      setShowModal((prevStatus) =>
        prevStatus === "Activo" ? "Inactivo" : "Activo"
      );

      // Refresh the page without causing a logout
    } catch (error) {
      // Handle any error logic here
      console.error("Error toggling professor status:", error);
    }
  };

  const editProfessor = async (e) => {
    e.preventDefault();
    try {
      console.log(code);
      navigate("/editProfile", { state: { code: professor.code } });
    } catch (error) {
      console.error("Error editing professor:", error);
    }
  };


  return (
    <div className="flex items-center justify-center h-screen">
      <form className="w-full max-w-x1">
        <div className="flex flex-col items-center h-screen w-full justify-center">
          <h3 className="text-center text-3xl text-gray-900 font-medium leading-8 mb-16">Perfil</h3>

          <div className="bg-white shadow-xl rounded-lg py-3 flex">
            <div className="photo-wrapper p-2">
              <img
                className="w-48 h-48 rounded-full mx-auto"
                src="https://www.gravatar.com/avatar/2acfb745ecf9d4dccb3364752d17f65f?s=260&d=mp"
                alt="John Doe"
              />
            </div>
            <div className="p-2">
              <h3 className="text-center text-2xl text-gray-900 font-medium leading-8">Ingeniería en Computación</h3>
              <table className="text-lg my-3">
                <tbody>
                  <tr>
                    <td className="px-2 py-2 text-gray-500 font-semibold">Código</td>
                    <td className="px-2 py-2">{code}</td>
                  </tr>
                  <tr>
                    <td className="px-2 py-2 text-gray-500 font-semibold">Nombre</td>
                    <td className="px-2 py-2">
                      {firstName} {lastName1} {lastName2}
                    </td>
                  </tr>
                  <tr>
                    <td className="px-2 py-2 text-gray-500 font-semibold">Correo</td>
                    <td className="px-2 py-2">{email}</td>
                  </tr>
                  <tr>
                    <td className="px-2 py-2 text-gray-500 font-semibold">Sede</td>
                    <td className="px-2 py-2">{branch}</td>
                  </tr>
                  <tr>
                    <td className="px-2 py-2 text-gray-500 font-semibold">Celular</td>
                    <td className="px-2 py-2">{phoneNumber}</td>
                  </tr>
                  <tr>
                    <td className="px-2 py-2 text-gray-500 font-semibold">Status</td>
                    <td className="px-2 py-2">{showModal}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="max-w-full basis-3 h-full mt-6">
            <div className="flex justify-end">
            <button
              type="button"
              onClick={editProfessor}
              className="w-full justify-center text-white bg-primary-1000 hover:bg-primary-1000 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-00747F dark:hover:bg-primary-1000 dark:focus:ring-primary-800"
            >
              Editar
            </button>
              <button
                onClick={handleToggleStatus}
                className="text-white bg-primary-1000 hover:bg-primary-1000 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-00747F dark:hover:bg-primary-1000 dark:focus:ring-primary-800"
              >
                Modificar Estado
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
