import { TeamCard } from "../components/TeamCard";
import { ProfessorCard } from "../components/ProfessorCard";


export function AssistantHomePage() {
  return(

    
    <div className="bg-gray-100 flex justify-around py-5">
      <div class="w-1/2 justify-center">
  <div class="flex flex-col items-center">
    <h2 class="mb-0 text-4xl text-center leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-black">
      Equipo de Trabajo
    </h2>
    <div class="mt-3 max-w-5xl max-h-fit">
      <TeamCard />
    </div>
  </div>
</div>


      <div class="w-1/2">
        <div class="flex items-center justify-start overflow-auto">
          <div class="flex max-w-xs">
            <ProfessorCard />
            <ProfessorCard />
            <ProfessorCard />
            <ProfessorCard />
          </div>
        </div>
      </div>

      
    </div>


  

    

)}
