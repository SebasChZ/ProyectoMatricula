import { ActivityCard } from "../components/ActivityCard";
import { Link } from "react-router-dom";

export function ModifyPlanTrabajoPage() {
  return (
    <div className="ml-14 mt-8">
      <section className="overflow-hidden max-h-[850px]">
        <h1 className="text-4xl font-normal tracking-tight text-left mb-6">
          Modificar Plan de trabajo
        </h1>
        <div className="flex flex-col justify-between">
          <div className="basis-1/5 flex flex-col justify-start max-w-4xl">
            <form
              className="flex flex-row justify-between"
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <div className="basis-1/2">
                <div className="flex flex-col">
                  <label
                    htmlFor="titulo"
                    className="block uppercase tracking-wide text-gray-700 font-bold mb-2"
                  >
                    Titulo
                  </label>
                  <input
                    type="text"
                    id="titulo"
                    name="titulo"
                    className="appearance-none block w-full bg-white-200 text-gray-700 border rounded-2xl py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white shadow-xl"
                  />
                </div>
                <div className="mt-4">
                  <label
                    className="block uppercase tracking-wide text-gray-700 font-bold mb-2"
                    htmlFor="descripcion"
                  >
                    Descripcion
                  </label>
                  <input
                    id="descripcion"
                    type="text"
                    placeholder=""
                    className="appearance-none block w-full bg-white-200 text-gray-700 border rounded-2xl py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white shadow-xl"
                  />
                </div>
              </div>
              <div className="basis-1/5">
                <div>
                  <label
                    className="block uppercase tracking-wide text-gray-700 font-bold mb-2 text-center"
                    for="grid-fechaInicio"
                  >
                    Fecha de Inicio
                  </label>
                  <div className="flex justify-center">
                    <div class="flex items-center">
                      <input
                        type="date"
                        id="start"
                        name="trip-start"
                        class="bg-gray-200 border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 text-center"
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-center font-bold mb-2"
                    for="grid-fechaInicio"
                  >
                    Fecha Final
                  </label>
                  <div className="flex justify-center">
                    <div class="flex items-center">
                      <input
                        type="date"
                        id="start"
                        name="trip-start"
                        class="bg-gray-200 border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 text-center"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-end">
                <Link
                  className="text-white font-semibold bg-blue-950 px-6 py-2 rounded-3xl h-10"
                  to="/modificar-plan"
                >
                  Guardar cambios
                </Link>
              </div>
            </form>
          </div>
          <div>
            <h2 className="text-2xl font-normal tracking-tight mb-6">
              Actividades
            </h2>
            <div className="grid grid-cols-3 gap-8 justify-items-center py-6 overflow-y-auto overflow-x-hidden scrollable max-h-[500px] px-6 mr-36">
              <ActivityCard />
              <ActivityCard />
              <ActivityCard />
              <ActivityCard />
              <ActivityCard />
              <ActivityCard />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
