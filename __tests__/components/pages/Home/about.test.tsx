import About from "@/components/pages/Home/about";
import { render, screen } from "@testing-library/react";

describe("About", () => {
  it("should render correctly with frequently asked questions", () => {
    render(<About />);

    const heading = screen.getByRole("heading", {
      name: "Frequently asked questions",
    });
    const heading2 = screen.getByRole("heading", {
      name: "Salman masood",
    });
    expect(heading).toBeInTheDocument();
    expect(heading2).toBeInTheDocument();
  });
});
