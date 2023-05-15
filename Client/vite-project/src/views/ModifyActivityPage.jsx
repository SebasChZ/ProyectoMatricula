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

// 0 Planeada, 1 Notificada, 2 Cancelada, 3 Realizada

function RenderIfStatus(props) {
  const { status, modality } = props;
  let componentToRender = "";
  switch (status) {
    case "2": // Cancelada
      componentToRender = (
        <>
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs rounded-lg font-bold mb-2"
            htmlFor="observaciones"
          >
            Observaciones
          </label>
          <textarea
            name=""
            id="observaciones"
            cols="30"
            rows="10"
            className="resize-none appearance-none block w-full bg-white-200 text-gray-700 border rounded-2xl py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white shadow-xl"
            placeholder="Añadir observaciones..."
          ></textarea>
        </>
      );
      break;
    case "3":
      componentToRender = (
        <div className="w-full bg-white-200 text-gray-700 border rounded-2xl py-12 px-8 leading-tight focus:outline-none focus:bg-white shadow-xl">
          <div className="flex">
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
                    Subir evidencias
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
                multiple
              />
            </div>
            <div>
              {modality === "true" ? (
                <div className="ml-3">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs rounded-lg font-bold mb-2"
                    htmlFor="observaciones"
                  >
                    Link a sesión
                  </label>
                  <input
                    type="text"
                    name="link"
                    id="link"
                    className="resize-none appearance-none block w-full bg-white-200 text-gray-700 border rounded-2xl py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white shadow-xl"
                  />
                </div>
              ) : (
                <></>
              )}
            </div>
          </div>
          <div class="relative mt-4">
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
                  Lista de participantes
                </span>
                <span class="mt-0.5 block text-sm text-gray-500 dark:text-gray-400">
                  Max 2 MB
                </span>
              </div>
            </label>
            <input hidden="false" type="file" name="button2" id="photoFile" />
          </div>
        </div>
      );
      break;
    default:
      componentToRender = <></>;
      break;
  }
  return componentToRender;
}

export function ModifyActivityPage() {
  const today = new Date();
  const tomorrow = new Date();

  tomorrow.setDate(tomorrow.getDate() + 1);

  const [isOpen, setIsOpen] = useState(false);

  //input values
  const [reminders, setReminders] = useState([today, tomorrow]);
  const [title, setTitle] = useState("Torneo de ajedrez");
  const [description, setDescription] = useState(
    "Me complace anunciarles que se desarrollará un torneo de ajedrez a principios de este primer semestre 2023, donde el ganador se llevará 20mil colones en efectivo. No se lo pierdan!!"
  );
  const [poster, setPoster] = useState(chessImg);
  const [fechaInicio, setFechaInicio] = useState("");
  const [fechaFin, setFechaFin] = useState("");
  const [category, setCategory] = useState("R");
  const [status, setStatus] = useState("0");
  const [modality, setModality] = useState("false");

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
                value={title}
                className="text-4xl text-center focus:outline-none font-semibold"
                onChange={(e) => setTitle(e.target.value)}
              />
              <CreateIcon />
            </div>
            <div className="flex w-full justify-between px-8 mt-8">
              <div className="basis-1/2">
                <textarea
                  value={description}
                  name=""
                  id=""
                  cols="45"
                  rows="6"
                  className="resize-none appearance-none block w-full bg-white-200 text-gray-700 border rounded-2xl py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white shadow-xl"
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea>
                <button className="h-[368px] w-full" onClick={openModal}>
                  <img
                    src={poster}
                    alt="Afiche"
                    className="h-[368px] w-full object-none rounded-2xl"
                  />
                </button>
                <div className="flex justify-between mt-4">
                  <div>
                    <label
                      for="photoFile"
                      class="relative inline-flex items-center px-4 py-2 bg-blue-400 border border-transparent rounded-md font-semibold text-white"
                    >
                      <FileUploadIcon />
                      <span>Subir Imagen</span>
                      <input
                        id="photoFile"
                        type="file"
                        class="absolute inset-0 w-full h-full opacity-0 cursor-pointer hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400"
                        multiple
                      />
                    </label>
                  </div>
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
                        htmlFor="grid-fechaInicio"
                      >
                        Fecha de Inicio
                      </label>
                      <div className="flex items-center">
                        <input
                          value={fechaInicio}
                          type="date"
                          id="start"
                          name="trip-start"
                          className="appearance-none block w-full bg-white text-gray-700 border rounded-2xl py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white shadow-xl"
                          onChange={(e) => setFechaInicio(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="w-full px-3">
                      <label
                        className="block uppercase tracking-wide text-gray-700 text-xs text-center font-bold mb-2"
                        htmlFor="grid-fechaInicio"
                      >
                        Fecha Final
                      </label>
                      <div className="flex items-center">
                        <input
                          value={fechaFin}
                          type="date"
                          id="start"
                          name="trip-start"
                          className="appearance-none block w-full bg-white text-gray-700 border rounded-2xl py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white shadow-xl"
                          onChange={(e) => setFechaFin(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center mt-4 w-full">
                    {/* selects */}

                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                      <label
                        className="block uppercase tracking-wide text-gray-700 text-xs rounded-lg font-bold mb-2"
                        htmlFor="grid-responsable"
                      >
                        Tipo
                      </label>
                      <div className="relative">
                        <select
                          value={category}
                          className="appearance-none block w-full bg-white text-gray-700 border rounded-2xl py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white shadow-xl"
                          id="grid-state"
                          onChange={(e) => setCategory(e.target.value)}
                        >
                          <option value="O">Orientadora</option>
                          <option value="M">Motivacional</option>
                          <option value="AE">
                            De apoyo a la vida estudiantil
                          </option>
                          <option value="OT">De orden técnico</option>
                          <option value="R">De recreación</option>
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
                        htmlFor="grid-responsable"
                      >
                        Estado
                      </label>
                      {/* // 0 Planeada, 1 Notificada, 2 Cancelada, 3 Realizada */}
                      <div className="relative">
                        <select
                          value={status}
                          className="appearance-none block w-full bg-white text-gray-700 border rounded-2xl py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white shadow-xl"
                          id="grid-state"
                          onChange={(e) => setStatus(e.target.value)}
                        >
                          <option value="0">Planeada</option>
                          <option value="1">Notificada</option>
                          <option value="2">Cancelada</option>
                          <option value="3">Realizada</option>
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
                        htmlFor="grid-responsable"
                      >
                        Modalidad
                      </label>
                      <div className="relative">
                        <select
                          value={modality}
                          className="appearance-none block w-full bg-white text-gray-700 border rounded-2xl py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white shadow-xl"
                          id="grid-state"
                          onChange={(e) => setModality(e.target.value)}
                        >
                          <option value="false">Presencial</option>
                          <option value="true">Virtual</option>
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
                      value={reminders}
                      onChange={setReminders}
                      inputClass="appearance-none block w-full bg-white text-gray-700 border rounded-2xl py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white shadow-xl"
                    />
                  </div>
                  <div className="pt-4">
                    {/* Conditionally render components*/}
                    <RenderIfStatus status={status} modality={modality} />
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
