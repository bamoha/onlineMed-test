import { render, screen } from "@testing-library/react";
import { OrderDates } from "../OrderDates";

describe("OrderDates", () => {
  it("displays created and estimated delivery dates", () => {
    render(
      <OrderDates
        createdAt="01 Jan 2024, 09:00 AM"
        estimatedDelivery="03 Jan 2024, 10:00 AM"
      />
    );

    expect(screen.getByText(/01 Jan 2024/i)).toBeInTheDocument();
    expect(screen.getByText(/03 Jan 2024/i)).toBeInTheDocument();
  });
});
