type StepStatus = "complete" | "current" | "upcoming";

export interface Step {
  title: string;
  status: StepStatus;
}

const steps: Step[] = [
  { title: "Order placed", status: "complete" },
  { title: "In Progress", status: "complete" },
  { title: "Review", status: "current" },
  { title: "Completed", status: "upcoming" },
];

export { steps };
