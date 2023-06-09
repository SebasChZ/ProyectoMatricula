import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../api/axios";
import { ProfessorCard } from "../components/ProfessorCard";

const LOGIN_URL = "/professor";

export function RegisterProfessorPage() {

  const navigate = useNavigate();

  const [firstName, setfirstName] = useState("");
  const [lastName1, setlastName1] = useState("");
  const [lastName2, setlastName2] = useState("");
  const [officePhoneNumber, setofficePhoneNumber] = useState("");
  const [phoneNumber, setphoneNumber] = useState("");
  const [branch, setbranch] = useState("");
  const [email, setEmail] = useState("");
  const [photo, setphoto] = useState("");

  const [consultProfessors, setConsultProfessors] = useState([]);

  const [professorId, setProfessorId] = useState("");

  const errorRef = useRef();

  const [errorMsg, setErrorMsg] = useState("");

  const [professors, setProfessors] = useState([]);

  useEffect(() => {
    setErrorMsg("");
  }, [
    firstName,
    lastName1,
    lastName2,
    officePhoneNumber,
    phoneNumber,
    branch, 
    email,
    photo,
  ]);

  useEffect(() => {
    const fetchProfessors = async () => {
      try {
        const response = await axios.get(LOGIN_URL);
        console.log('Response data:', response.data.professorsFounds);
        setProfessors(response.data.professorsFounds);
      } catch (err) {
        console.error(err);
      }
    };
    fetchProfessors();
  }, []);

  const registerProfessor = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        LOGIN_URL,
        JSON.stringify({
          firstName,
          lastName1,
          lastName2,
          officePhoneNumber,
          phoneNumber,
          branch,
          email,
          photo,
        }),
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      console.log(JSON.stringify(response?.data));
      //console.log(JSON.stringify(response));
      // const accessToken = response?.data?.accessToken;
      const roles = response?.data?.status;
      alert("Successfully registered" + response?.data?.password);
      setfirstName("");
      setlastName1("");
      setlastName2("");
      setofficePhoneNumber("");
      setphoneNumber("");
      setbranch("");
      setEmail("");
      setphoto("");
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

  const consult = async (e) => {
    e.preventDefault();
    try {
      console.log("professorId:", professorId);
  
      const response = await axios.get(`${LOGIN_URL}/id/${professorId}`);
      const professor = response.data.professor;
  
      if (professor) {
        navigate("/viewProfile", { state: { consultProfessors: professor } });
      } else {
        setErrorMsg("Professor not found");
      }
    } catch (err) {
      setErrorMsg("No Server Response" + err);
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
              registerProfessor(e);
              consult(e);
            }}
          >
            <h2 className="mb-9 text-[40px] text-center  leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-black">
              Registrar Profesor
            </h2>

            <div className="flex flex-wrap -mx-20 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-firstName"
                >
                  Nombre
                </label>
                <input
                  onChange={(e) => {
                    setfirstName(e.target.value);
                  }}
                  className="appearance-none block w-full bg-white-200 text-gray-700 border rounded-2xl py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white shadow-xl"
                  id="grid-first-name"
                  type="text"
                  placeholder=""
                  value={firstName}
                />
              </div>
              <div className="w-full md:w-1/4 px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-lastName1"
                >
                  Apellido 1
                </label>
                <input
                  onChange={(e) => {
                    setlastName1(e.target.value);
                  }}
                  className="appearance-none block w-full bg-white-200 text-gray-700 border rounded-2xl py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white shadow-xl"
                  id="grid-last-name"
                  type="text"
                  placeholder=""
                  value={lastName1}
                />
              </div>
              <div className="w-full md:w-1/4 px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-lastName2"
                >
                  Apellido 2
                </label>
                <input
                  onChange={(e) => {
                    setlastName2(e.target.value);
                  }}
                  className="appearance-none block w-full bg-white-200 text-gray-700 border rounded-2xl py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white shadow-xl"
                  id="grid-last-name"
                  type="text"
                  placeholder=""
                  value={lastName2}
                />
              </div>
            </div>

            <div className="flex flex-wrap -mx-20 mb-6">
              <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-officePhoneNumber"
                >
                  Número de oficina
                </label>
                <input
                  onChange={(e) => {
                    setofficePhoneNumber(e.target.value);
                  }}
                  className="appearance-none block w-full bg-white-200 text-gray-700 border rounded-2xl py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white shadow-xl"
                  id="grid-first-name"
                  type="text"
                  placeholder=""
                  value={officePhoneNumber}
                />
              </div>
              <div className="w-full md:w-1/3 px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-celular"
                >
                  Número de Celular
                </label>
                <input
                  onChange={(e) => {
                    setphoneNumber(e.target.value);
                  }}
                  className="appearance-none block w-full bg-white-200 text-gray-700 border rounded-2xl py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white shadow-xl"
                  id="grid-last-name"
                  type="text"
                  placeholder=""
                  value={phoneNumber}
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
                    id="grid-state"
                    value={branch}
                  >
                    <option value="CA">Cartago</option>
                    <option value="LI">Limón</option>
                    <option value="SC">San Carlos</option>
                    <option value="SJ">San José</option>
                    <option value="AL">Alajuela</option>
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

            <div className="flex flex-wrap -mx-20 mb-2">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-descripcion"
                >
                  Correo
                </label>
                <input
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  className="appearance-none block w-full bg-white-200 text-gray-700 border rounded-2xl py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white shadow-xl"
                  id="grid-first-name"
                  type="text"
                  placeholder=""
                  value={email}
                />
              </div>
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-asignarEquipo"
                >
                  Asignar Equipo
                </label>
                <div className="relative">
                  <select
                    className="appearance-none bg-white block w-full border rounded-2xl py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-gray-100 shadow-xl"
                    id="grid-state"
                  >
                    <option>Equipo 1</option>
                    <option>Equipo 2</option>
                    <option>Equipo 3</option>
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
            <div className="flex flex-wrap -mx-2 mb-2">
              <div className="w-full md:w-1/2 px-2 mb-6 md:mb-0">
                <div className="flex items-center">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs text-center font-bold mr-2" htmlFor="grid-descripcion">
                    Consultar ID
                  </label>
                  <input
                    onChange={(e) => {
                      setProfessorId(e.target.value);
                    }}
                    className="appearance-none block bg-white-200 text-gray-700 border rounded-2xl py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white shadow-xl"
                    id="grid-first-name"
                    type="text"
                    placeholder=""
                    value={professorId}
                  />

                  <button
                  type="button"
                  onClick={consult}
                  className="justify-center text-white bg-gradient-to-r from-teal-700 to-cyan-950 font-medium rounded-lg text-sm px-5 py-2.5 text-center 
                  hover:bg-gradient-to-r hover:from-teal-600 hover:to-cyan-800 hover:shadow-2xl transition-all duration-300 ease-in-out hover:scale-110 hover:-translate-y-1"
                >
                  Consultar
                </button>
                </div>
              </div>
            </div>




            <div className="flex flex-wrap -mx-20 mb-2">
              <div className="w-full px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-foto"
                >
                  Foto
                </label>

                <div className="flex justify-between items-center ">
                  <div class="relative">
                    <label
                      title="Click to upload"
                      for="photoFile"
                      class="cursor-pointer flex items-center gap-4 px-6 py-4 before:border-gray-400/60 hover:before:border-gray-300 group dark:before:border-gray-600 before:absolute before:inset-0 before:rounded-3xl before:border before:border-dashed before:transition-transform before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95"
                    >
                      <div class="w-max relative">
                        <img
                          class="w-12"
                          src="https://www.svgrepo.com/show/485545/upload-cicle.svg"
                          alt="file upload icon"
                          width="512"
                          height="512"
                        />
                      </div>
                      <div class="relative">
                        <span class="block relative text-blue-500 group-hover:text-blue-500">
                          Subir archivo
                        </span>
                        <span class="mt-0.5 block text-sm text-gray-500 dark:text-gray-400">
                          Max 2 MB
                        </span>
                      </div>
                    </label>
                    <input
                      hidden="false"
                      type="file"
                      name="button2"
                      id="photoFile"
                    />
                  </div>

                  <div className="max-w-full w-3/12 h-full ">
                  <button
                    type="submit"
                    className="justify-center text-white bg-gradient-to-r from-teal-700 to-cyan-950 font-medium rounded-lg text-sm px-5 py-2.5 text-center 
                    hover:bg-gradient-to-r hover:from-teal-600 hover:to-cyan-800 hover:shadow-2xl transition-all duration-300 ease-in-out hover:scale-110 hover:-translate-y-1"
                  >
                    Registrar
                  </button>

                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>

      
      {/* <div className="bg-gray-100 flex justify-around py-5 ">
        <div class="flex items-center w-full justify-start overflow-auto">
          <div class="flex justify-start max-w-xs ">
            {professors.map((professor) => (
              <ProfessorCard key={professor.id} professor={professor} />
            ))}
          </div>
        </div>
      </div> */}


    </div>
  );
}
