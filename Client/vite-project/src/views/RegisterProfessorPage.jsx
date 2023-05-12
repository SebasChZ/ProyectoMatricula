import { useState, useRef, useEffect } from "react";

const LOGIN_URL = "/professor";

export function RegisterProfessorPage() {
  const [nombre, setNombre] = useState("");
  const [apellido1, setApellido1] = useState("");
  const [apellido2, setApellido2] = useState("");
  const [oficina, setOficina] = useState("");
  const [telefono, setTelefono] = useState("");
  const [sede, setSede] = useState("");
  const [email, setEmail] = useState("");
  const [profilepic, setProfilepic] = useState("");

  const errorRef = useRef();

  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    setErrorMsg("");
  }, [nombre, apellido1, apellido2, oficina, telefono, sede, profilepic]);

  const registerProfessor = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        LOGIN_URL,
        JSON.stringify({
          nombre,
          apellido1,
          apellido2,
          oficina,
          telefono,
          sede,
          email,
          profilepic,
        }),
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      console.log(JSON.stringify(response?.data));
      //console.log(JSON.stringify(response));
      // const accessToken = response?.data?.accessToken;
      const roles = response?.data?.status;
      alert("Successfully registered");
      setNombre("");
      setApellido1("");
      setApellido2("");
      setOficina("");
      setTelefono("");
      setSede("");
      setEmail("");
      setProfilepic("");
      navigate("/home-switch");
    } catch (err) {
      if (!err?.response) {
        console.log(err);
        setErrorMsg("No Server Response");
      } else if (err.response?.status === 400) {
        setErrorMsg("Missing Username or Password");
      } else if (err.response?.status === 401) {
        setErrorMsg("Unauthorized");
      } else {
        setErrorMsg("Login Failed");
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
                  htmlFor="grid-nombre"
                >
                  Nombre
                </label>
                <input
                  onChange={(e) => {
                    setNombre(e.target.value);
                  }}
                  className="appearance-none block w-full bg-white-200 text-gray-700 border rounded-2xl py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white shadow-xl"
                  id="grid-first-name"
                  type="text"
                  placeholder=""
                  value={nombre}
                />
              </div>
              <div className="w-full md:w-1/4 px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-apellido1"
                >
                  Apellido 1
                </label>
                <input
                  onChange={(e) => {
                    setApellido1(e.target.value);
                  }}
                  className="appearance-none block w-full bg-white-200 text-gray-700 border rounded-2xl py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white shadow-xl"
                  id="grid-last-name"
                  type="text"
                  placeholder=""
                  value={apellido1}
                />
              </div>
              <div className="w-full md:w-1/4 px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-apellido2"
                >
                  Apeliido 2
                </label>
                <input
                  onChange={(e) => {
                    setApellido2(e.target.value);
                  }}
                  className="appearance-none block w-full bg-white-200 text-gray-700 border rounded-2xl py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white shadow-xl"
                  id="grid-last-name"
                  type="text"
                  placeholder=""
                  value={apellido2}
                />
              </div>
            </div>

            <div className="flex flex-wrap -mx-20 mb-6">
              <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-oficina"
                >
                  Número de Oficina
                </label>
                <input
                  onChange={(e) => {
                    setOficina(e.target.value);
                  }}
                  className="appearance-none block w-full bg-white-200 text-gray-700 border rounded-2xl py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white shadow-xl"
                  id="grid-first-name"
                  type="text"
                  placeholder=""
                  value={oficina}
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
                    setTelefono(e.target.value);
                  }}
                  className="appearance-none block w-full bg-white-200 text-gray-700 border rounded-2xl py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white shadow-xl"
                  id="grid-last-name"
                  type="text"
                  placeholder=""
                  value={telefono}
                />
              </div>
              <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-sede"
                >
                  Sede
                </label>
                <div className="relative">
                  <select
                    onChange={(e) => {
                      setSede(e.target.value);
                    }}
                    className="appearance-none bg-white block w-full border rounded-2xl py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-gray-100 shadow-xl"
                    //className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 shadow-lg"
                    id="grid-state"
                    value={sede}
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
                  Email
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
                          Upload a file
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
        <div class="flex items-center w-full justify-center">
          <div class="max-w-xs">
            <div class="bg-white shadow-xl rounded-lg py-3">
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
                        Address
                      </td>
                      <td class="px-2 py-2">Chatakpur-3, Dhangadhi Kailali</td>
                    </tr>
                    <tr>
                      <td class="px-2 py-2 text-gray-500 font-semibold">
                        Phone
                      </td>
                      <td class="px-2 py-2">+977 9955221114</td>
                    </tr>
                    <tr>
                      <td class="px-2 py-2 text-gray-500 font-semibold">
                        Email
                      </td>
                      <td class="px-2 py-2">john@exmaple.com</td>
                    </tr>
                  </tbody>
                </table>

                <div class="text-center my-3">
                  <a
                    class="text-xs text-indigo-500 italic hover:underline hover:text-indigo-600 font-medium"
                    href="#"
                  >
                    View Profile
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
