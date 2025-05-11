import { render, screen } from "@testing-library/react";
import { OrderTimeline } from "../OrderTimeline";

const timeline = [
  { label: "Note Reviewed", date: "09 Oct 2023, 07:15 PM" },
  { label: "Note Created", date: "10 Oct 2023, 08:00 AM" },
];

describe("Timeline", () => {
  it("displays all timeline items", () => {
    render(<OrderTimeline timeline={timeline} />);

    timeline.forEach((item) => {
      expect(screen.getByText(item.label)).toBeInTheDocument();
      expect(screen.getByText(item.date)).toBeInTheDocument();
    });
  });
});
