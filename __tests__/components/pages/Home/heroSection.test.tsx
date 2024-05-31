import { render, screen } from "@testing-library/react";
import HeroSection from "@/components/pages/Home/heroSection";

jest.mock("../../../../src/components/pages/Home/dialogBox", () => ({
  __esModule: true,
  default: jest.fn(),
}));

jest.mock("nanoid", () => {
  return {
    nanoid: () => jest.fn(),
  };
});

jest.mock("next/navigation", () => {
  return {
    useRouter: () => jest.fn(),
  };
});

describe("HeroSection", () => {
  it("should render hero-section with heading", () => {
    render(<HeroSection />);

    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
  });
});
