import { useState, useRef, useEffect } from "react";
import axios from "../api/axios";
import { Link, useNavigate, useLocation } from "react-router-dom";


const LOGIN_URL = "/professor";

export function RegisterProfessorPage() {
  const [firstName, setfirstName] = useState("");
  const [lastName1, setlastName1] = useState("");
  const [lastName2, setlastName2] = useState("");
  const [officePhoneNumber, setofficePhoneNumber] = useState("");
  const [phoneNumber, setphoneNumber] = useState("");
  const [branch, setbranch] = useState("");
  const [email, setEmail] = useState("");
  const [photo, setphoto] = useState("");

  const errorRef = useRef();

  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    setErrorMsg("");
  }, [firstName,
    lastName1,
    lastName2,
    officePhoneNumber,
    phoneNumber,
    branch,
    email,
    photo]);

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
        setErrorMsg("Missing Username or Password" +err.response?.data);
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
              registerProfessor(e);
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
                  Apeliido 2
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
                      class="cursor-pointer flex items-center gap-4 px-6 py-4 before:border-gray-400/60 hover:before:border-gray-300 group dark:before:bg-darker dark:hover:before:border-gray-500 before:bg-gray-100 dark:before:border-gray-600 before:absolute before:inset-0 before:rounded-3xl before:border before:border-dashed before:transition-transform before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95"
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
                      className="w-full justify-center text-white bg-primary-1000 hover:bg-primary-1000 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-00747F dark:hover:bg-primary-1000 dark:focus:ring-primary-800"
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

      <div className="bg-gray-100 flex justify-around py-5 ">
        <div class="flex items-center w-full justify-start overflow-auto">
          <div class="flex justify-start max-w-xs ">
            <div class="bg-white shadow-xl rounded-lg py-3 ml-3 ">
            <div class="flex items-center justify-end mr-2">
              <input type="checkbox" id="myCheckbox" class="form-checkbox h-4 w-4 text-primary focus:ring-primary"/>
            </div>
              <div class="photo-wrapper px-2">
                <img
                  class="w-32 h-32 rounded-full mx-auto"
                  src="https://www.gravatar.com/avatar/2acfb745ecf9d4dccb3364752d17f65f?s=260&d=mp"
                  alt="John Doe"
                />
              </div>
              <div class="px-2">
                <h3 class="text-center text-xl text-gray-900 font-light">
                  Manitor Matinez
                </h3>
                <div class="text-center text-gray-400 text-xs font-semibold">
                  <p>Cartago</p>
                </div>

                <table class="text-xs my-3">
                  <tbody>
                    <tr>
                      <td class="px-2 py-2 text-gray-500 font-semibold">
                        Dirección
                      </td>
                      <td class="px-2 py-2">Chatakpur-3, Dhangadhi Kailali</td>
                    </tr>
                    <tr>
                      <td class="px-2 py-2 text-gray-500 font-semibold">
                        Celular
                      </td>
                      <td class="px-2 py-2">+977 9955221114</td>
                    </tr>
                    <tr>
                      <td class="px-2 py-2 text-gray-500 font-semibold">
                        Correo
                      </td>
                      <td class="px-2 py-2">john@exmaple.com</td>
                    </tr>
                  </tbody>
                </table>
                <div class="ml-4 flex items-end space-x-20">
                <div class="flex flex-col items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-8 w-8">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                  <label class="block  tracking-wide text-gray-700 text-xs font-bold mt-2" for="grid-branch">Cartago</label>
                </div>

                <div class="flex flex-col items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-8 w-8">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                  </svg>
                  <label class="block tracking-wide text-gray-700 text-xs font-bold mt-2" for="grid-branch">Ing.Computación</label>
                </div>
              </div>
                <div class="text-center my-3">
                  <a
                    class="text-xs text-indigo-500 italic hover:underline hover:text-indigo-600 font-medium"
                    href="#"
                  >
                    Ver perfil
                  </a>
                </div>
              </div>
            </div>


            <div class="bg-white shadow-xl rounded-lg py-3 ml-2">
              <div class="flex items-center justify-end mr-2">
                <input type="checkbox" id="myCheckbox" class="form-checkbox h-4 w-4 text-primary focus:ring-primary"/>
              </div>
              <div class="photo-wrapper px-2">
                <img
                  class="w-32 h-32 rounded-full mx-auto"
                  src="https://www.gravatar.com/avatar/2acfb745ecf9d4dccb3364752d17f65f?s=260&d=mp"
                  alt="John Doe"
                />
              </div>
              <div class="px-2">
                <h3 class="text-center text-xl text-gray-900 font-light">
                  Feñaña Murillo
                </h3>
                <div class="text-center text-gray-400 text-xs font-semibold">
                  <p>Cartago</p>
                </div>

                <table class="text-xs my-3">
                  <tbody>
                    <tr>
                      <td class="px-2 py-2 text-gray-500 font-semibold">
                        Dirección
                      </td>
                      <td class="px-2 py-2">Cartago, Cartago, Oriental</td>
                    </tr>
                    <tr>
                      <td class="px-2 py-2 text-gray-500 font-semibold">
                        Celular
                      </td>
                      <td class="px-2 py-2">+506 85986048</td>
                    </tr>
                    <tr>
                      <td class="px-2 py-2 text-gray-500 font-semibold">
                        Correo
                      </td>
                      <td class="px-2 py-2">fermurillo04@estudiantec.cr</td>
                    </tr>
                  </tbody>
                </table>
                <div class="ml-4 flex items-end space-x-20">
                <div class="flex flex-col items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-8 w-8">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                  <label class="block  tracking-wide text-gray-700 text-xs font-bold mt-2" for="grid-branch">Cartago</label>
                </div>

                <div class="flex flex-col items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-8 w-8">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                  </svg>
                  <label class="block tracking-wide text-gray-700 text-xs font-bold mt-2" for="grid-branch">Ing.Computación</label>
                </div>
              </div>

                <div class="text-center my-3">
                  <a
                    class="text-xs text-indigo-500 italic hover:underline hover:text-indigo-600 font-medium"
                    href="#"
                  >
                    Ver perfil
                  </a>
                </div>
              </div>
            </div>

            <div class="bg-white shadow-xl rounded-lg py-3 ml-2">
              <div class="flex items-center justify-end mr-2">
                <input type="checkbox" id="myCheckbox" class="form-checkbox h-4 w-4 text-primary focus:ring-primary"/>
              </div>
              <div class="photo-wrapper px-2">
                <img
                  class="w-32 h-32 rounded-full mx-auto"
                  src="https://www.gravatar.com/avatar/2acfb745ecf9d4dccb3364752d17f65f?s=260&d=mp"
                  alt="John Doe"
                />
              </div>
              <div class="px-2">
                <h3 class="text-center text-xl text-gray-900 font-light">
                  Feñaña Murillo
                </h3>
                <div class="text-center text-gray-400 text-xs font-semibold">
                  <p>Cartago</p>
                </div>

                <table class="text-xs my-3">
                  <tbody>
                    <tr>
                      <td class="px-2 py-2 text-gray-500 font-semibold">
                        Dirección
                      </td>
                      <td class="px-2 py-2">Cartago, Cartago, Oriental</td>
                    </tr>
                    <tr>
                      <td class="px-2 py-2 text-gray-500 font-semibold">
                        Celular
                      </td>
                      <td class="px-2 py-2">+506 85986048</td>
                    </tr>
                    <tr>
                      <td class="px-2 py-2 text-gray-500 font-semibold">
                        Correo
                      </td>
                      <td class="px-2 py-2">fermurillo04@estudiantec.cr</td>
                    </tr>
                  </tbody>
                </table>
                <div class="ml-4 flex items-end space-x-20">
                <div class="flex flex-col items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-8 w-8">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                  <label class="block  tracking-wide text-gray-700 text-xs font-bold mt-2" for="grid-branch">Cartago</label>
                </div>

                <div class="flex flex-col items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-8 w-8">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                  </svg>
                  <label class="block tracking-wide text-gray-700 text-xs font-bold mt-2" for="grid-branch">Ing.Computación</label>
                </div>
              </div>

                <div class="text-center my-3">
                  <a
                    class="text-xs text-indigo-500 italic hover:underline hover:text-indigo-600 font-medium"
                    href="#"
                  >
                    Ver perfil
                  </a>
                </div>
              </div>
            </div>

            <div class="bg-white shadow-xl rounded-lg py-3 ml-2">
              <div class="flex items-center justify-end mr-2">
                <input type="checkbox" id="myCheckbox" class="form-checkbox h-4 w-4 text-primary focus:ring-primary"/>
              </div>
              <div class="photo-wrapper px-2">
                <img
                  class="w-32 h-32 rounded-full mx-auto"
                  src="https://www.gravatar.com/avatar/2acfb745ecf9d4dccb3364752d17f65f?s=260&d=mp"
                  alt="John Doe"
                />
              </div>
              <div class="px-2">
                <h3 class="text-center text-xl text-gray-900 font-light">
                  Feñaña Murillo
                </h3>
                <div class="text-center text-gray-400 text-xs font-semibold">
                  <p>Cartago</p>
                </div>

                <table class="text-xs my-3">
                  <tbody>
                    <tr>
                      <td class="px-2 py-2 text-gray-500 font-semibold">
                        Dirección
                      </td>
                      <td class="px-2 py-2">Cartago, Cartago, Oriental</td>
                    </tr>
                    <tr>
                      <td class="px-2 py-2 text-gray-500 font-semibold">
                        Celular
                      </td>
                      <td class="px-2 py-2">+506 85986048</td>
                    </tr>
                    <tr>
                      <td class="px-2 py-2 text-gray-500 font-semibold">
                        Correo
                      </td>
                      <td class="px-2 py-2">fermurillo04@estudiantec.cr</td>
                    </tr>
                  </tbody>
                </table>
                <div class="ml-4 flex items-end space-x-20">
                <div class="flex flex-col items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-8 w-8">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                  <label class="block  tracking-wide text-gray-700 text-xs font-bold mt-2" for="grid-branch">Cartago</label>
                </div>

                <div class="flex flex-col items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-8 w-8">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                  </svg>
                  <label class="block tracking-wide text-gray-700 text-xs font-bold mt-2" for="grid-branch">Ing.Computación</label>
                </div>
              </div>

                <div class="text-center my-3">
                  <a
                    class="text-xs text-indigo-500 italic hover:underline hover:text-indigo-600 font-medium"
                    href="#"
                  >
                    Ver perfil
                  </a>
                </div>
              </div>

              
            </div>

            <div class="bg-white shadow-xl rounded-lg py-3 ml-2">
              <div class="flex items-center justify-end mr-2">
                <input type="checkbox" id="myCheckbox" class="form-checkbox h-4 w-4 text-primary focus:ring-primary"/>
              </div>
              <div class="photo-wrapper px-2">
                <img
                  class="w-32 h-32 rounded-full mx-auto"
                  src="https://www.gravatar.com/avatar/2acfb745ecf9d4dccb3364752d17f65f?s=260&d=mp"
                  alt="John Doe"
                />
              </div>
              <div class="px-2">
                <h3 class="text-center text-xl text-gray-900 font-light">
                  Feñaña Murillo
                </h3>
                <div class="text-center text-gray-400 text-xs font-semibold">
                  <p>Cartago</p>
                </div>

                <table class="text-xs my-3">
                  <tbody>
                    <tr>
                      <td class="px-2 py-2 text-gray-500 font-semibold">
                        Dirección
                      </td>
                      <td class="px-2 py-2">Cartago, Cartago, Oriental</td>
                    </tr>
                    <tr>
                      <td class="px-2 py-2 text-gray-500 font-semibold">
                        Celular
                      </td>
                      <td class="px-2 py-2">+506 85986048</td>
                    </tr>
                    <tr>
                      <td class="px-2 py-2 text-gray-500 font-semibold">
                        Correo
                      </td>
                      <td class="px-2 py-2">fermurillo04@estudiantec.cr</td>
                    </tr>
                  </tbody>
                </table>
                <div class="ml-4 flex items-end space-x-20">
                <div class="flex flex-col items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-8 w-8">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                  <label class="block  tracking-wide text-gray-700 text-xs font-bold mt-2" for="grid-branch">Cartago</label>
                </div>

                <div class="flex flex-col items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-8 w-8">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                  </svg>
                  <label class="block tracking-wide text-gray-700 text-xs font-bold mt-2" for="grid-branch">Ing.Computación</label>
                </div>
              </div>

                <div class="text-center my-3">
                  <a
                    class="text-xs text-indigo-500 italic hover:underline hover:text-indigo-600 font-medium"
                    href="#"
                  >
                    Ver perfil
                  </a>
                </div>
              </div>
            </div>

            <div class="bg-white shadow-xl rounded-lg py-3 ml-2">
              <div class="flex items-center justify-end mr-2">
                <input type="checkbox" id="myCheckbox" class="form-checkbox h-4 w-4 text-primary focus:ring-primary"/>
              </div>
              <div class="photo-wrapper px-2">
                <img
                  class="w-32 h-32 rounded-full mx-auto"
                  src="https://www.gravatar.com/avatar/2acfb745ecf9d4dccb3364752d17f65f?s=260&d=mp"
                  alt="John Doe"
                />
              </div>
              <div class="px-2">
                <h3 class="text-center text-xl text-gray-900 font-light">
                  Feñaña Murillo
                </h3>
                <div class="text-center text-gray-400 text-xs font-semibold">
                  <p>Cartago</p>
                </div>

                <table class="text-xs my-3">
                  <tbody>
                    <tr>
                      <td class="px-2 py-2 text-gray-500 font-semibold">
                        Dirección
                      </td>
                      <td class="px-2 py-2">Cartago, Cartago, Oriental</td>
                    </tr>
                    <tr>
                      <td class="px-2 py-2 text-gray-500 font-semibold">
                        Celular
                      </td>
                      <td class="px-2 py-2">+506 85986048</td>
                    </tr>
                    <tr>
                      <td class="px-2 py-2 text-gray-500 font-semibold">
                        Correo
                      </td>
                      <td class="px-2 py-2">fermurillo04@estudiantec.cr</td>
                    </tr>
                  </tbody>
                </table>
                <div class="ml-4 flex items-end space-x-20">
                <div class="flex flex-col items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-8 w-8">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                  <label class="block  tracking-wide text-gray-700 text-xs font-bold mt-2" for="grid-branch">Cartago</label>
                </div>

                <div class="flex flex-col items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-8 w-8">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                  </svg>
                  <label class="block tracking-wide text-gray-700 text-xs font-bold mt-2" for="grid-branch">Ing.Computación</label>
                </div>
              </div>

                <div class="text-center my-3">
                  <a
                    class="text-xs text-indigo-500 italic hover:underline hover:text-indigo-600 font-medium"
                    href="#"
                  >
                    Ver perfil
                  </a>
                </div>
              </div>

              
            </div>

            <div class="bg-white shadow-xl rounded-lg py-3 ml-2">
              <div class="flex items-center justify-end mr-2">
                <input type="checkbox" id="myCheckbox" class="form-checkbox h-4 w-4 text-primary focus:ring-primary"/>
              </div>
              <div class="photo-wrapper px-2">
                <img
                  class="w-32 h-32 rounded-full mx-auto"
                  src="https://www.gravatar.com/avatar/2acfb745ecf9d4dccb3364752d17f65f?s=260&d=mp"
                  alt="John Doe"
                />
              </div>
              <div class="px-2">
                <h3 class="text-center text-xl text-gray-900 font-light">
                  Feñaña Murillo
                </h3>
                <div class="text-center text-gray-400 text-xs font-semibold">
                  <p>Cartago</p>
                </div>

                <table class="text-xs my-3">
                  <tbody>
                    <tr>
                      <td class="px-2 py-2 text-gray-500 font-semibold">
                        Dirección
                      </td>
                      <td class="px-2 py-2">Cartago, Cartago, Oriental</td>
                    </tr>
                    <tr>
                      <td class="px-2 py-2 text-gray-500 font-semibold">
                        Celular
                      </td>
                      <td class="px-2 py-2">+506 85986048</td>
                    </tr>
                    <tr>
                      <td class="px-2 py-2 text-gray-500 font-semibold">
                        Correo
                      </td>
                      <td class="px-2 py-2">fermurillo04@estudiantec.cr</td>
                    </tr>
                  </tbody>
                </table>
                <div class="ml-4 flex items-end space-x-20">
                <div class="flex flex-col items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-8 w-8">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                  <label class="block  tracking-wide text-gray-700 text-xs font-bold mt-2" for="grid-branch">Cartago</label>
                </div>

                <div class="flex flex-col items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-8 w-8">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                  </svg>
                  <label class="block tracking-wide text-gray-700 text-xs font-bold mt-2" for="grid-branch">Ing.Computación</label>
                </div>
              </div>

                <div class="text-center my-3">
                  <a
                    class="text-xs text-indigo-500 italic hover:underline hover:text-indigo-600 font-medium"
                    href="#"
                  >
                    Ver perfil
                  </a>
                </div>
              </div>
            </div>

            <div class="bg-white shadow-xl rounded-lg py-3 ml-2">
              <div class="flex items-center justify-end mr-2">
                <input type="checkbox" id="myCheckbox" class="form-checkbox h-4 w-4 text-primary focus:ring-primary"/>
              </div>
              <div class="photo-wrapper px-2">
                <img
                  class="w-32 h-32 rounded-full mx-auto"
                  src="https://www.gravatar.com/avatar/2acfb745ecf9d4dccb3364752d17f65f?s=260&d=mp"
                  alt="John Doe"
                />
              </div>
              <div class="px-2">
                <h3 class="text-center text-xl text-gray-900 font-light">
                  Feñaña Murillo
                </h3>
                <div class="text-center text-gray-400 text-xs font-semibold">
                  <p>Cartago</p>
                </div>

                <table class="text-xs my-3">
                  <tbody>
                    <tr>
                      <td class="px-2 py-2 text-gray-500 font-semibold">
                        Dirección
                      </td>
                      <td class="px-2 py-2">Cartago, Cartago, Oriental</td>
                    </tr>
                    <tr>
                      <td class="px-2 py-2 text-gray-500 font-semibold">
                        Celular
                      </td>
                      <td class="px-2 py-2">+506 85986048</td>
                    </tr>
                    <tr>
                      <td class="px-2 py-2 text-gray-500 font-semibold">
                        Correo
                      </td>
                      <td class="px-2 py-2">fermurillo04@estudiantec.cr</td>
                    </tr>
                  </tbody>
                </table>
                <div class="ml-4 flex items-end space-x-20">
                <div class="flex flex-col items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-8 w-8">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                  <label class="block  tracking-wide text-gray-700 text-xs font-bold mt-2" for="grid-branch">Cartago</label>
                </div>

                <div class="flex flex-col items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-8 w-8">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                  </svg>
                  <label class="block tracking-wide text-gray-700 text-xs font-bold mt-2" for="grid-branch">Ing.Computación</label>
                </div>
              </div>

                <div class="text-center my-3">
                  <a
                    class="text-xs text-indigo-500 italic hover:underline hover:text-indigo-600 font-medium"
                    href="#"
                  >
                    Ver perfil
                  </a>
                </div>
              </div>

              
            </div>

            <div class="bg-white shadow-xl rounded-lg py-3 ml-2">
              <div class="flex items-center justify-end mr-2">
                <input type="checkbox" id="myCheckbox" class="form-checkbox h-4 w-4 text-primary focus:ring-primary"/>
              </div>
              <div class="photo-wrapper px-2">
                <img
                  class="w-32 h-32 rounded-full mx-auto"
                  src="https://www.gravatar.com/avatar/2acfb745ecf9d4dccb3364752d17f65f?s=260&d=mp"
                  alt="John Doe"
                />
              </div>
              <div class="px-2">
                <h3 class="text-center text-xl text-gray-900 font-light">
                  Feñaña Murillo
                </h3>
                <div class="text-center text-gray-400 text-xs font-semibold">
                  <p>Cartago</p>
                </div>

                <table class="text-xs my-3">
                  <tbody>
                    <tr>
                      <td class="px-2 py-2 text-gray-500 font-semibold">
                        Dirección
                      </td>
                      <td class="px-2 py-2">Cartago, Cartago, Oriental</td>
                    </tr>
                    <tr>
                      <td class="px-2 py-2 text-gray-500 font-semibold">
                        Celular
                      </td>
                      <td class="px-2 py-2">+506 85986048</td>
                    </tr>
                    <tr>
                      <td class="px-2 py-2 text-gray-500 font-semibold">
                        Correo
                      </td>
                      <td class="px-2 py-2">fermurillo04@estudiantec.cr</td>
                    </tr>
                  </tbody>
                </table>
                <div class="ml-4 flex items-end space-x-20">
                <div class="flex flex-col items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-8 w-8">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                  <label class="block  tracking-wide text-gray-700 text-xs font-bold mt-2" for="grid-branch">Cartago</label>
                </div>

                <div class="flex flex-col items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-8 w-8">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                  </svg>
                  <label class="block tracking-wide text-gray-700 text-xs font-bold mt-2" for="grid-branch">Ing.Computación</label>
                </div>
              </div>

                <div class="text-center my-3">
                  <a
                    class="text-xs text-indigo-500 italic hover:underline hover:text-indigo-600 font-medium"
                    href="#"
                  >
                    Ver perfil
                  </a>
                </div>
              </div>
            </div>

            <div class="bg-white shadow-xl rounded-lg py-3 ml-2">
              <div class="flex items-center justify-end mr-2">
                <input type="checkbox" id="myCheckbox" class="form-checkbox h-4 w-4 text-primary focus:ring-primary"/>
              </div>
              <div class="photo-wrapper px-2">
                <img
                  class="w-32 h-32 rounded-full mx-auto"
                  src="https://www.gravatar.com/avatar/2acfb745ecf9d4dccb3364752d17f65f?s=260&d=mp"
                  alt="John Doe"
                />
              </div>
              <div class="px-2">
                <h3 class="text-center text-xl text-gray-900 font-light">
                  Feñaña Murillo
                </h3>
                <div class="text-center text-gray-400 text-xs font-semibold">
                  <p>Cartago</p>
                </div>

                <table class="text-xs my-3">
                  <tbody>
                    <tr>
                      <td class="px-2 py-2 text-gray-500 font-semibold">
                        Dirección
                      </td>
                      <td class="px-2 py-2">Cartago, Cartago, Oriental</td>
                    </tr>
                    <tr>
                      <td class="px-2 py-2 text-gray-500 font-semibold">
                        Celular
                      </td>
                      <td class="px-2 py-2">+506 85986048</td>
                    </tr>
                    <tr>
                      <td class="px-2 py-2 text-gray-500 font-semibold">
                        Correo
                      </td>
                      <td class="px-2 py-2">fermurillo04@estudiantec.cr</td>
                    </tr>
                  </tbody>
                </table>
                <div class="ml-4 flex items-end space-x-20">
                <div class="flex flex-col items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-8 w-8">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                  <label class="block  tracking-wide text-gray-700 text-xs font-bold mt-2" for="grid-branch">Cartago</label>
                </div>

                <div class="flex flex-col items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-8 w-8">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                  </svg>
                  <label class="block tracking-wide text-gray-700 text-xs font-bold mt-2" for="grid-branch">Ing.Computación</label>
                </div>
              </div>

                <div class="text-center my-3">
                  <a
                    class="text-xs text-indigo-500 italic hover:underline hover:text-indigo-600 font-medium"
                    href="#"
                  >
                    Ver perfil
                  </a>
                </div>
              </div>

              
            </div>
            
            
          </div>
        </div>
      </div>
    </div>
  );
}
