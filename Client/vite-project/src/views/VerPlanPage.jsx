import { ActivityCard } from "../components/ActivityCard";

export function VerPlanPage() {
  return (
    <div className="ml-14 mt-8">
      <section className="overflow-hidden max-h-[800px]">
        <h1 className="text-4xl font-normal tracking-tight text-center mb-6">
          Plan Cartago I 2023
        </h1>
        <div className="flex justify-between">
          <div>
            <h2 className="text-2xl font-normal tracking-tight mb-6">
              Activades
            </h2>
            <div className="grid grid-cols-2 gap-8 justify-items-center py-6 overflow-y-auto overflow-x-hidden scrollable max-h-[700px] px-6">
              <ActivityCard />
              <ActivityCard />
              <ActivityCard />
              <ActivityCard />
              <ActivityCard />
              <ActivityCard />
              <ActivityCard />
              <ActivityCard />
              <ActivityCard />
              <ActivityCard />
              <ActivityCard />
              <ActivityCard />
            </div>
            <p>Boton</p>
          </div>
          <div className="basis-1/5 mr-20">
            <div className="shadow-xl rounded-md mb-8 p-4">
              <p className="text-center">
                Planeamiento del curso lectivo I semestre 2023 para la sede de
                Cartago
              </p>
            </div>
            <div>
              <div>
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 text-center"
                  for="grid-fechaInicio"
                >
                  Fecha de Inicio
                </label>
                <div className="flex items-center">
                  <input
                    type="date"
                    id="start"
                    name="trip-start"
                    className="bg-gray-200 border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  />
                </div>
              </div>
              <div className="mt-4">
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
                    className="bg-gray-200 border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
