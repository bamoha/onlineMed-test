import { render, screen } from "@testing-library/react";
import { OrderPatientDetail } from "../OrderPatientDetail";

const patient = {
  fullName: "James Maddison",
  dob: "10 Oct 2025",
  startDate: "23 Oct 2025",
  returnDate: "28 Oct 2025",
  assignedTo: "Dr. Samson",
};

describe("PatientDetail", () => {
  it("shows all patient info", () => {
    render(<OrderPatientDetail patient={patient} />);

    Object.values(patient).forEach((val) => {
      expect(screen.getByText(val)).toBeInTheDocument();
    });
  });
});
