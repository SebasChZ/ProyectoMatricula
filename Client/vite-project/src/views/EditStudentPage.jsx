import { useState, useRef, useEffect } from "react";
import axios from "../api/axios";
import { Link } from "react-router-dom";

const studentRoute = "http://localhost:3500/student";

export function EditStudentPage() {
    const [newName, setfirstName] = useState("");
    const [newLastName1, setlastName1] = useState("");
    const [newLastName2, setlastName2] = useState("");
    const [branch, setbranch] = useState("");
    const [newEmail, setEmail] = useState("");
    const [newPhone, setcelular] = useState("");
    const [id, setCode] = useState("");
  
    const errorRef = useRef();
  
    const [errorMsg, setErrorMsg] = useState("");
  
    useEffect(() => {
      setErrorMsg("");
    }, [
      id,
      newName,
      newLastName1,
      newLastName2,
      branch,
      newEmail,
      newPhone,
    ]);
  
    const editStudent = async (e) => {
      console.log("editStudent button clicked");

      e.preventDefault();
      try {
        const response = await axios.put(
          `http://localhost:3500/student/modify/${id}`,
          {
            id,
            newName,
            newLastName1,
            newLastName2,
            branch,
            newEmail,
            newPhone,
          },
          {
            headers: { "Content-Type": "application/json" },
          }
        );
        console.log(JSON.stringify(response?.data));
  
        const roles = response?.data?.status;
        alert("Successfully edited" + response?.data?.password);
        setFirstName("");
        setLastName1("");
        setLastName2("");
        setBranch("");
        setEmail("");
        setCelular("");
        setCode("");
      } catch (err) {
        if (!err.response) {
          setErrorMsg("No Server Response" + err);
        } else if (err.response.status === 400) {
          setErrorMsg("Missing Username or Password" + err.response.data);
        } else if (err.response.status === 401) {
          setErrorMsg("Unauthorized");
        } else {
          console.log(err.response.data);
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
                editStudent(e);
              }}
            >
              <h2 className="mb-9 text-[40px] text-center  leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-black">
                Editar Estudiante
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
                    value={newName}
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
                    value={newLastName1}
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
                    value={newLastName2}
                  />
                </div>
              </div>
  
              <div className="flex flex-wrap -mx-20 mb-6">
        
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
                    value={newEmail}
                  />
                </div>
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-descripcion"
                  >
                    Celular
                  </label>
                  <input
                    onChange={(e) => {
                      setcelular(e.target.value);
                    }}
                    className="appearance-none block w-full bg-white-200 text-gray-700 border rounded-2xl py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white shadow-xl"
                    id="grid-first-name"
                    type="text"
                    placeholder=""
                    value={newPhone}
                  />
                </div>
              </div>

              <div className="flex flex-wrap -mx-20 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-code"
                  >
                    Carne
                  </label>
                  <input
                    onChange={(e) => {
                      setCode(e.target.value);
                    }}
                    className="appearance-none block w-full bg-white-200 text-gray-700 border rounded-2xl py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white shadow-xl"
                    id="grid-code"
                    type="text"
                    placeholder=""
                    value={id}
                  />
                </div>
              </div>
  
              <div className="flex flex-wrap -mx-20 mb-2">
                <div className="w-full px-3 mb-6 md:mb-0">
                  
  
                  <div className="flex justify-between items-center ">
  
                  <div className="max-w-full w-3/12 h-full">
                    <button
                      onClick={editStudent} // Call the editStudent function on button click
                      className="w-full justify-center text-white bg-primary-1000 hover:bg-primary-1000 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-00747F dark:hover:bg-primary-1000 dark:focus:ring-primary-800"
                    >
                      Editar
                    </button>
                  </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  
}