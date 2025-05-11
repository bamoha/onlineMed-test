import { render, screen } from "@testing-library/react";
import { DoctorInfo } from "../DoctorInfo";

describe("DoctorInfo", () => {
  it("renders doctor name and specialty", () => {
    render(
      <DoctorInfo
        doctor={{ name: "Dr. John Doe", specialty: "Cardiologist" }}
      />
    );

    expect(screen.getByText("Dr. John Doe")).toBeInTheDocument();
    expect(screen.getByText("Cardiologist")).toBeInTheDocument();
  });
});
