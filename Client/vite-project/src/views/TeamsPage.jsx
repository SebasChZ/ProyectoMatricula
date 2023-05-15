import { useState, useRef, useEffect } from "react";
import axios from "../api/axios";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { ProfessorCard } from "../components/ProfessorCard";

const LOGIN_URL = "/professor";

export function TeamsPage() {
  const [teamName, setteamName] = useState("");
  const [branch, setbranch] = useState("");
  const [coordinador, setcoordinador] = useState("");
  const [student, setstudent] = useState("");

  const errorRef = useRef();

  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    setErrorMsg("");
  }, [
    teamName,
    branch,
    coordinador,
    student,
  ]);

  const addTeam = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        LOGIN_URL,
        JSON.stringify({
          teamName,
          branch,
          coordinador,
          student,
        }),
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      console.log(JSON.stringify(response?.data));
     
      const roles = response?.data?.status;
      alert("Successfully added" + response?.data?.password);
      setteamName("");
      setbranch("");
      setcoordinador("");
      setstudent("");
      navigate("/home-switch");
    } catch (err) {
      if (!err?.response) {
        setErrorMsg("No Server Response" + err);
      } else if (err.response?.status === 400) {
        setErrorMsg("Missing Username or Password" + err.response?.data);
      } else if (err.response?.status === 401) {
        setErrorMsg("Unauthorized");
      } else {
        console.log(err.response?.data);
        setErrorMsg("Login Failed" + err);
      }
      errRef.current.focus();
    }
  };
  return (
    <div className="flex flex-col h-screen">
      <p
        ref={errorRef}
        className={errorMsg ? "errmsg" : "offscreen"}
        aria-live="assertive"
      >
        {errorMsg}
      </p>
      <div className="container mx-auto fex-col">
        <div className="w-6/12 ">
          <form
            onSubmit={(e) => {
                addTeam(e);
            }}
          >
            <h2 className="mb-9 text-[40px] text-center  leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-black">
              Equipos
            </h2>

            <div className="flex flex-wrap -mx-20 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-teamName"
                >
                  Nombre Equipo
                </label>
                <input
                  onChange={(e) => {
                    setteamName(e.target.value);
                  }}
                  className="appearance-none block w-full bg-white-200 text-gray-700 border rounded-2xl py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white shadow-xl"
                  id="grid-first-name"
                  type="text"
                  placeholder=""
                  value={teamName}
                />
              </div>
              <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-branch"
                >
                  Sede
                </label>
                <div className="relative">
                  <select
                    onChange={(e) => {
                      setbranch(e.target.value);
                    }}
                    className="appearance-none bg-white block w-full border rounded-2xl py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-gray-100 shadow-xl"
                    //className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 shadow-lg"
                    id="grid-branch"
                    value={branch}
                  >
                    <option>Cartago</option>
                    <option>Limón</option>
                    <option>San Carlos</option>
                    <option>San José</option>
                    <option>Alajuela</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg
                      className="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>
              </div>
              
            </div>

            <div className="flex flex-wrap -mx-20 mb-6">
              
              
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-coordinador"
                >
                  Coordinador
                </label>
                <div className="relative">
                  <select
                    onChange={(e) => {
                      setcoordinador(e.target.value);
                    }}
                    className="appearance-none bg-white block w-full border rounded-2xl py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-gray-100 shadow-xl"
                    
                    id="grid-state"
                    value={coordinador}
                  >
                    <option>Profe 1</option>
                    <option>Profe 2</option>
                    <option>Profe 3</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg
                      className="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-student"
                >
                  Estudiantes
                </label>
                <div className="relative">
                  <select
                    onChange={(e) => {
                      setstudent(e.target.value);
                    }}
                    className="appearance-none bg-white block w-full border rounded-2xl py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-gray-100 shadow-xl"
                    
                    id="grid-state"
                    value={student}
                  >
                    <option>Estudiante 1</option>
                    <option>Estudiante 2</option>
                    <option>Estudiante 3</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg
                      className="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap -mx-20 mb-6 justify-center">
                <div className="max-w-full w-3/12 h-full justify-center ">
                    <button
                      type="submit"
                      className="w-full justify-center text-white bg-primary-1000 hover:bg-primary-1000 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-00747F dark:hover:bg-primary-1000 dark:focus:ring-primary-800"
                    >
                      Agregar
                    </button>
                  </div>
            </div>

          </form>
        </div>
      </div>

        <div className="bg-gray-100 flex justify-around py-5">
            <div className="flex items-center w-full justify-start overflow-auto">
                <div className="flex flex-col">
                    <h2 className="mb-9 text-[40px] text-center  leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-black">
                            Asignar Profesores
                    </h2>
                    <div className="flex justify-start max-w-xs">
                        <ProfessorCard />
                        <ProfessorCard />
                        <ProfessorCard />
                        <ProfessorCard />
                        <ProfessorCard />
                        <ProfessorCard />
                        <ProfessorCard />
                        <ProfessorCard />
                        <ProfessorCard />
                        <ProfessorCard />
                        <ProfessorCard />
                        <ProfessorCard />
                    </div>
                </div>
            </div>
        </div>

    </div>
  );
}
