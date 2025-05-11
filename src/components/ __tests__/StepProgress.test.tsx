import { render, screen } from "@testing-library/react";
import StepProgress from "../StepProgress";
import { Step } from "@/types/step";

describe("StepProgress", () => {
  const steps: Step[] = [
    { title: "Step 1", status: "complete" },
    { title: "Step 2", status: "current" },
    { title: "Step 3", status: "upcoming" },
  ];

  it("renders all step titles", () => {
    render(<StepProgress steps={steps} />);

    steps.forEach((step) => {
      expect(screen.getByText(step.title)).toBeInTheDocument();
    });
  });

  it("displays step numbers for current and upcoming steps", () => {
    render(<StepProgress steps={steps} />);
    expect(screen.getByText("2")).toBeInTheDocument(); // current
    expect(screen.getByText("3")).toBeInTheDocument(); // upcoming
  });
});
