import {render, screen} from "@testing-library/react";
import {Layout} from "../components/Layout";
import "@testing-library/jest-dom";
jest.mock("next/router", () => require("next-router-mock"));
jest.mock("next/dist/client/router", () => require("next-router-mock"));

describe("Home", () => {
  it("checks position of navigation", () => {
    render(<Layout />);

    const navbar = screen.getByRole("navbar");

    expect(navbar).toBeInTheDocument();
  });
});
