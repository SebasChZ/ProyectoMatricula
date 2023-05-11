import { PlanTrabajoCard } from "../components/PlanTrabajoCard";
import { ActivityCard } from "../components/ActivityCard";

export function PlansViewPage() {
  return (
    <div className="ml-14 mt-8">
      <section>
        <h1 className="text-4xl font-normal tracking-tight text-center mb-6">
          Planes
        </h1>
        <div className="flex justify-center">
          <div className="grid grid-cols-2 gap-8 justify-items-center py-6 overflow-y-auto overflow-x-hidden scrollable max-h-[800px] px-6">
            <PlanTrabajoCard />
            <PlanTrabajoCard />
            <PlanTrabajoCard />
            <PlanTrabajoCard />
            <PlanTrabajoCard />
            <PlanTrabajoCard />
            <PlanTrabajoCard />
            <PlanTrabajoCard />
            <PlanTrabajoCard />
            <PlanTrabajoCard />
            <PlanTrabajoCard />
            <PlanTrabajoCard />
          </div>
        </div>
      </section>
    </div>
  );
}
