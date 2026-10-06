import { project } from "./project";
import { milestones, type MilestoneStatus } from "./plan";

const statusStyles: Record<MilestoneStatus, string> = {
  done: "bg-emerald-100 text-emerald-800",
  "in progress": "bg-amber-100 text-amber-800",
  planned: "bg-slate-200 text-slate-700",
};

export default function App() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-16 text-slate-900">
      <header className="mb-10">
        <h1 className="text-4xl font-bold tracking-tight">
          {project.name}{" "}
          <span className="text-indigo-600">${project.ticker}</span>
        </h1>
        <p className="mt-3 text-lg text-slate-600">{project.description}</p>
      </header>

      <section aria-labelledby="plan-heading">
        <h2 id="plan-heading" className="mb-4 text-2xl font-semibold">
          Plan
        </h2>
        <ol className="space-y-4">
          {milestones.map((m) => (
            <li key={m.id} className="rounded-lg border border-slate-200 p-4">
              <div className="flex items-center justify-between gap-4">
                <h3 className="font-semibold">
                  {m.id}: {m.title}
                </h3>
                <span
                  className={`rounded-full px-3 py-0.5 text-sm font-medium ${statusStyles[m.status]}`}
                >
                  {m.status}
                </span>
              </div>
              <p className="mt-2 text-slate-600">{m.summary}</p>
            </li>
          ))}
        </ol>
      </section>
    </main>
  );
}
