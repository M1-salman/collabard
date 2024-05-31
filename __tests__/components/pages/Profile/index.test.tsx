import { render, screen } from "@testing-library/react";
import Profile from "@/components/pages/Profile";

jest.mock("../../../../src/hooks/useCurrentUser", () => {
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
    redirect: jest.fn(),
  };
});

jest.mock("../../../../src/actions/logout", () => {
  return {
    logout: () => jest.fn(),
  };
});

describe("Profile", () => {
  it("should redirect to '/' when session is not available", () => {
    render(<Profile />);
    const { redirect } = require("next/navigation"); // Retrieve redirect here
    expect(redirect).toHaveBeenCalledWith("/");
  });

  it("should render profile with user details when session is available", () => {
    const user = {
      id: 1,
      name: "exampleUser",
      email: "example@gmail.com",
      image: null,
    };

    require("../../../../src/hooks/useCurrentUser").setCurrentUser(user);
    render(<Profile />);

    const headings = screen.getAllByRole("heading");
    expect(headings.length).toBeGreaterThan(0);
  });
});
