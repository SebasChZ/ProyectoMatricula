// imgs
import chessImg from "../img/chess.png";
// Components
import Modal from "../components/Modal";
import Avatars from "../components/Avatars";
import DatePicker from "react-multi-date-picker";
//Hooks
import { useState } from "react";
// Icons
import CreateIcon from "@mui/icons-material/Create";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import AddIcon from "@mui/icons-material/Add";

export function ModifyActivityPage() {
  const today = new Date();
  const tomorrow = new Date();

  tomorrow.setDate(tomorrow.getDate() + 1);

  const [isOpen, setIsOpen] = useState(false);
  const [values, setValues] = useState([today, tomorrow]);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  return (
    <>
      <Modal
        isOpen={isOpen}
        closeModal={closeModal}
        children={<img src={chessImg} alt="Afiche" className="h-full w-full" />}
        title={""}
      ></Modal>
      <div className="flex h-screen">
        <div className="mt-8 flex w-full">
          <form
            className="w-full flex flex-col items-center"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="flex items-center">
              <input
                type="text"
                value="Torneo de ajedrez"
                className="text-4xl text-center focus:outline-none font-semibold"
              />
              <CreateIcon />
            </div>
            <div className="flex w-full justify-between px-8 mt-8">
              <div className="basis-1/2">
                <textarea
                  value="Me complace anunciarles que se desarrollará un torneo de ajedrez a principios de este primer semestre 2023, donde el ganador se llevará 20mil colones en efectivo. No se lo pierdan!!"
                  name=""
                  id=""
                  cols="45"
                  rows="6"
                  className="resize-none appearance-none block w-full bg-white-200 text-gray-700 border rounded-2xl py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white shadow-xl"
                ></textarea>
                <button className="h-[368px] w-full" onClick={openModal}>
                  <img
                    src={chessImg}
                    alt="Afiche"
                    className="h-[368px] w-full object-none rounded-2xl"
                  />
                </button>
                <div className="flex justify-between mt-4">
                  <button className="text-white bg-blue-400 py-2 px-8 rounded-md border-2 border-blue-400 hover:bg-white hover:text-blue-400">
                    <FileUploadIcon />
                    Subir imagen
                  </button>
                  <div>
                    <button className="text-blue-400 border-2 border-blue-400 py-2 px-8 rounded-md mr-4 hover:bg-blue-400 hover:text-white">
                      Cancelar
                    </button>
                    <button className="text-white border-2 border-blue-400 bg-blue-400 py-2 px-8 rounded-md hover:bg-white hover:text-blue-400">
                      Guardar
                    </button>
                  </div>
                </div>
              </div>
              <div className="basis-1/2 flex flex-col items-center">
                <div className="flex flex-col items-center max-w-xl">
                  <div className="flex items-center">
                    {/* fechas */}
                    <div className="w-full px-3">
                      <label
                        className="block uppercase tracking-wide text-gray-700 text-xs text-center font-bold mb-2"
                        for="grid-fechaInicio"
                      >
                        Fecha de Inicio
                      </label>
                      <div className="flex items-center">
                        <input
                          type="date"
                          id="start"
                          name="trip-start"
                          className="appearance-none block w-full bg-white text-gray-700 border rounded-2xl py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white shadow-xl"
                        />
                      </div>
                    </div>
                    <div className="w-full px-3">
                      <label
                        className="block uppercase tracking-wide text-gray-700 text-xs text-center font-bold mb-2"
                        for="grid-fechaInicio"
                      >
                        Fecha Final
                      </label>
                      <div className="flex items-center">
                        <input
                          type="date"
                          id="start"
                          name="trip-start"
                          className="appearance-none block w-full bg-white text-gray-700 border rounded-2xl py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white shadow-xl"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center mt-4 w-full">
                    {/* selects */}

                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                      <label
                        className="block uppercase tracking-wide text-gray-700 text-xs rounded-lg font-bold mb-2"
                        for="grid-responsable"
                      >
                        Tipo
                      </label>
                      <div className="relative">
                        <select
                          className="appearance-none block w-full bg-white text-gray-700 border rounded-2xl py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white shadow-xl"
                          id="grid-state"
                        >
                          <option>Orientadora</option>
                          <option>Motivacional</option>
                          <option>De apoyo a la vida estudiantil</option>
                          <option>De orden técnico</option>
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
                        className="block uppercase tracking-wide text-gray-700 text-xs rounded-lg font-bold mb-2"
                        for="grid-responsable"
                      >
                        Estado
                      </label>
                      <div className="relative">
                        <select
                          className="appearance-none block w-full bg-white text-gray-700 border rounded-2xl py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white shadow-xl"
                          id="grid-state"
                        >
                          <option>Planeada</option>
                          <option>Notificada</option>
                          <option>Realizada</option>
                          <option>Cancelada</option>
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
                        className="block uppercase tracking-wide text-gray-700 text-xs rounded-lg font-bold mb-2"
                        for="grid-responsable"
                      >
                        Modalidad
                      </label>
                      <div className="relative">
                        <select
                          className="appearance-none block w-full bg-white text-gray-700 border rounded-2xl py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white shadow-xl"
                          id="grid-state"
                        >
                          <option>Presencial</option>
                          <option>Virtual</option>
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
                  <div className="mt-4">
                    {/* responsables */}
                    <h6 className="block uppercase tracking-wide text-gray-700 text-xs rounded-lg font-bold mb-2 text-center">
                      Responsables
                    </h6>
                    <div className="flex justify-between items-center">
                      <Avatars size={"lg"} />
                      <button className="text-white border-2 border-blue-400 bg-blue-400 py-1 px-8 rounded-2xl hover:bg-white hover:text-blue-400 ml-4">
                        <AddIcon />
                      </button>
                    </div>
                  </div>
                  <div className="mt-4">
                    {/* Recordatorios */}
                    <h6 className="block uppercase tracking-wide text-gray-700 text-xs rounded-lg font-bold mb-2 text-center">
                      Recordatorios
                    </h6>
                    <DatePicker
                      multiple
                      value={values}
                      onChange={setValues}
                      inputClass="appearance-none block w-full bg-white text-gray-700 border rounded-2xl py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white shadow-xl"
                    />
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
