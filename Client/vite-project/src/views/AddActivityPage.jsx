export function AddActivityPage() {
  return (
    <div className="flex items-center justify-center h-screen">
      <form className="w-full max-w-lg">
        <h2 classNameName="mb-9 text-[40px]  text-center leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-black">
          Añadir Actividad
          <div className="flex justify-end">
            <button
              type="button"
              className="text-black border border-blackhover:bg-black hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:border-black dark:text-black dark:hover:text-white dark:focus:ring-black dark:hover:bg-black ml-auto"
            >
              <svg
                aria-hidden="true"
                className="w-5 h-5 transform rotate-180"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span className="sr-only">Icon description</span>
            </button>
          </div>
        </h2>

        <div className="flex flex-wrap -mx-20 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-titulo"
            >
              Título
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 rounded-lg text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white shadow-lg"
              id="grid-first-name"
              type="text"
              placeholder=""
            />
          </div>
          <div className="w-full md:w-1/4 px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs text-right font-bold mb-2"
              for="grid-modalidad"
            >
              Modalidad
            </label>
            <div className="relative">
              <select
                className="block appearance-none w-full bg-gray-200 rounded-lg border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 shadow-lg"
                id="grid-modalidad"
              >
                <option>Presencial</option>
                <option>Remoto</option>
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
          <div className="w-full md:w-1/4 px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs text-right font-bold mb-2"
              for="grid-fechaInicio"
            >
              Fecha de Inicio
            </label>
            <div className="flex items-center">
              <input
                type="date"
                id="start"
                name="trip-start"
                className="bg-gray-200 border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 text-center"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-wrap -mx-20 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-descripcion"
            >
              Descripción
            </label>
            <textarea
              id="descripcion"
              rows="4"
              className="block p-2.5 w-full text-sm text-black bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Añadir Descripción"
            ></textarea>
          </div>

          <div className="w-full md:w-1/4 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide rounded-lg text-gray-700 text-xs text-right font-bold mb-2"
              for="grid-enlace"
            >
              Enlace
            </label>

            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 shadow-lg"
              id="grid-last-name"
              type="text"
              placeholder=""
            />
          </div>

          <div className="w-full md:w-1/4 px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs text-right font-bold mb-2"
              for="grid-fechaFinal"
            >
              Fecha de Final
            </label>

            <div className="flex items-center">
              <input
                type="date"
                id="start"
                name="trip-start"
                className="bg-gray-200 border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 text-center"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-wrap -mx-20 mb-2">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs rounded-lg font-bold mb-2"
              for="grid-responsable"
            >
              Responsable
            </label>
            <div className="relative">
              <select
                className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-state"
              >
                <option>Hay que cargar profesores</option>
                <option>Hay que cargar profesores</option>
                <option>Hay que cargar profesores</option>
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
          <div className="w-full md:w-1/4 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs rounded-lg text-right font-bold mb-2"
              for="grid-asignarEquipo"
            >
              Semana
            </label>
            <div className="relative">
              <select
                className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-state"
              >
                <option>Semana 1</option>
                <option>Semana 2</option>
                <option>Semana 3</option>
                <option>Semana 4</option>
                <option>Semana 5</option>
                <option>Semana 6</option>
                <option>Semana 7</option>
                <option>Semana 9</option>
                <option>Semana 10</option>
                <option>Semana 11</option>
                <option>Semana 12</option>
                <option>Semana 13</option>
                <option>Semana 14</option>
                <option>Semana 15</option>
                <option>Semana 16</option>
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

          <div className="w-full md:w-1/4 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs rounded-lg text-right font-bold mb-2"
              for="grid-asignarEquipo"
            >
              Tipo
            </label>
            <div className="relative">
              <select
                className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-state"
              >
                <option>Orientadora</option>
                <option>Motivacional</option>
                <option>Apoyo a la vida estudiantil</option>
                <option>Orden Técnico</option>
                <option>Recreacional</option>
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
              for="grid-foto"
            >
              Imágenes
            </label>
            <input
              className="block w-full text-sm text-gray-900 border border-gray-700 rounded-lg cursor-pointer bg-gray-700 dark:text-gray-700 focus:outline-none dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-700"
              aria-describedby="user_avatar_help"
              id="user_avatar"
              type="file"
            />
          </div>
        </div>

        <div className="flex items-center">
          <div className="w-full md:w-3/4 flex-grow">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-comentario"
            >
              Comentarios
            </label>
            <textarea
              id="comentario"
              rows="4"
              className="block p-2.5 w-full text-sm text-black bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Añadir Comentario"
            ></textarea>
          </div>
          <div className="ml-2">
            <button
              type="button"
              className="text-black border border-blackhover:bg-black hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center dark:border-black dark:text-black dark:hover:text-white dark:focus:ring-black dark:hover:bg-black"
            >
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                ></path>
              </svg>
              <span className="sr-only">Icon description</span>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
