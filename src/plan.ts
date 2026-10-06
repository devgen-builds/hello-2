export type MilestoneStatus = "done" | "in progress" | "planned";

export interface Milestone {
  id: string;
  title: string;
  summary: string;
  status: MilestoneStatus;
}

// Mirrors PLAN.md. Keep the two in sync.
export const milestones: Milestone[] = [
  {
    id: "M1",
    title: "Starter page",
    summary: "Static page with the project name, ticker and plan; tests and build pass.",
    status: "done",
  },
  {
    id: "M2",
    title: "Polish and accessibility",
    summary: "Responsive layout, text-based statuses, semantic landmarks and metadata.",
    status: "planned",
  },
  {
    id: "M3",
    title: "Static deploy readiness",
    summary: "Relative base path, no external runtime requests, documented build and preview.",
    status: "planned",
  },
];
