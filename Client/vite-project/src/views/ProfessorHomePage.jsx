import { PlanTrabajoCard } from "../components/PlanTrabajoCard";
import { ActivityCard } from "../components/ActivityCard";

export function ProfessorHomePage() {
  return (
    <div className="ml-14 mt-8">
      <section>
        <h1 className="text-4xl font-normal tracking-tight">Planes</h1>
        <div className="flex gap-10 overflow-auto scrollable py-6 w-11/12">
          <PlanTrabajoCard />
          <PlanTrabajoCard />
          <PlanTrabajoCard />
          <PlanTrabajoCard />
          <PlanTrabajoCard />
          <PlanTrabajoCard />
        </div>
      </section>
      <section className="mt-10">
        <h1 className="text-4xl font-normal tracking-tight">
          Próximas actividades
        </h1>
        <div className="flex gap-10 overflow-auto scrollable py-6  w-11/12">
          <ActivityCard />
          <ActivityCard />
          <ActivityCard />
          <ActivityCard />
          <ActivityCard />
        </div>
      </section>
    </div>
  );
}
