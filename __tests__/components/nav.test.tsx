import { render, screen } from "@testing-library/react";
import Nav from "@/components/nav";

jest.mock("../../src/components/userButton", () => ({
  __esModule: true,
  default: jest.fn(() => <div data-testid="user-button-mock" />),
}));

describe("Nav", () => {
  it("should render navbar with userButton", () => {
    render(<Nav />);

    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();

    // Check if the mocked UserButton component is rendered
    const userButton = screen.getByTestId("user-button-mock");
    expect(userButton).toBeInTheDocument();
  });
});
