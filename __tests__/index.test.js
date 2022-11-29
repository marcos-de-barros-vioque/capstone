import {render, screen} from "@testing-library/react";
import {Layout} from "../components/Layout";
import "@testing-library/jest-dom";

describe("Home", () => {
  it("checks position of navigation", () => {
    render(<Layout />);

    const navbar = screen.getByRole("navbar");

    expect(navbar).toBeInTheDocument();
  });
});