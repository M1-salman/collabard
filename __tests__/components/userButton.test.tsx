import { render, screen } from "@testing-library/react";
import UserButton from "@/components/userButton";

jest.mock("../../src/hooks/useCurrentUser", () => {
  let currentUser: object | null = null;

  return {
    useCurrentUser: () => currentUser,
    setCurrentUser: (user: object) => {
      currentUser = user;
    },
  };
});
jest.mock("next/navigation", () => {
  return {
    useRouter: () => jest.fn(),
  };
});

describe("UserButton", () => {
  it("should render 'Sign Up' button when session is not available", () => {
    render(<UserButton />);

    const signUpButton = screen.getByRole("button");
    expect(signUpButton).toBeInTheDocument;
  });

  it("should render a link for the profile when session is available", () => {
    const user = {
      id: 1,
      name: "exampleUser",
      email: "example@gmail.com",
      image: null,
    };

    require("../../src/hooks/useCurrentUser").setCurrentUser(user);
    render(<UserButton />);

    const link = screen.getByRole("link");
    expect(link).toBeInTheDocument;
    expect(link).toHaveAttribute("href", "/profile");
  });
});
