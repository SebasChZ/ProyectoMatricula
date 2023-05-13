import { ActivityCard } from "../components/ActivityCard";
import { Link } from "react-router-dom";

export function VerPlanPage() {
  return (
    <div className="ml-14 mt-8">
      <section className="overflow-hidden">
        <h1 className="text-4xl font-normal tracking-tight text-center mb-6">
          Plan Cartago I 2023
        </h1>
        <div className="flex justify-between">
          <div>
            <h2 className="text-2xl font-normal tracking-tight mb-6">
              Actividades
            </h2>
            <div className="grid grid-cols-2 gap-8 justify-items-center py-6 overflow-y-auto overflow-x-hidden scrollable max-h-[600px] px-6">
              <ActivityCard />
              <ActivityCard />
              <ActivityCard />
              <ActivityCard />
              <ActivityCard />
              <ActivityCard />
            </div>
            <div className="text-left mt-8 h-10">
              <Link
                className="text-white font-semibold bg-blue-950 px-6 py-2 rounded-3xl"
                to="/modificar-plan"
              >
                Modificar
              </Link>
            </div>
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
                  className="block uppercase tracking-wide text-gray-700 font-bold mb-2 text-center"
                  for="grid-fechaInicio"
                >
                  Fecha de Inicio
                </label>
                <div className="flex justify-center">
                  <span>12/02/2023</span>
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
                  <span>26/06/2023</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
