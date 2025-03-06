import { render, screen } from "@testing-library/react";
import ContactUs from "../ContactUs";
import "@testing-library/jest-dom";

test("Should load Contact Us component", () => {
  render(<ContactUs />);

  const heading = screen.getByRole("heading");
  expect(heading).toBeInTheDocument();
});
