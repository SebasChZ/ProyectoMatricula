import { TeamCard } from "../components/TeamCard";
import { ProfessorCard } from "../components/ProfessorCard";
import { ActivityCard } from "../components/ActivityCard";
import { EstudiantesFileCard } from "../components/EstudiantesFileCard";



export function AssistantHomePage() {
  return (


    <div className="">
      <div> {/* Este div es par el titulo */}
        <h2 className="text-xl text-center py-1">Inicio</h2>
      </div>

      <div className="bg-gray-100 grid grid-cols-2 justify-around pt-5 h-full"> {/*este es la secci´+on de arriba */}
        <div class="justify-center mx-5">

          <h3 class="text-gray-900 md:text-2xl">
            Equipo de Trabajo
          </h3>

          <div className="h-full pb-10">
            <TeamCard />
          </div>



        </div>

        <div class="justify-center mx-5">
          <h3 class="text-gray-900 md:text-2xl">
            Miembros del Equipo
          </h3>
          <div class="flex items-center justify-start overflow-auto ">
            <div class="flex max-w-xs">
              <ProfessorCard />
              <ProfessorCard />
              <ProfessorCard />
              <ProfessorCard />
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 pt-5 h-full pb-1"> {/*este es la secci´+on de arriba */}
        <div class="justify-center mx-5">
          <h3 class="text-gray-900 md:text-2xl">
            Estudiantes
          </h3>
          <div className="py-6">
            <EstudiantesFileCard />
          </div>

        </div>

        <div class="justify-center mx-5">
          <h3 class="text-gray-900 md:text-2xl">
            Miembros del Equipo
          </h3>
          <div class="flex items-center justify-start overflow-auto ">
            <div class="flex gap-10 overflow-auto scrollable py-6">
              <ActivityCard />
              <ActivityCard />
              <ActivityCard />
              <ActivityCard />
            </div>
          </div>
        </div>

      </div>
    </div>






  )
}
