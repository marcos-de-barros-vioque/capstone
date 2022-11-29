import {render, screen} from "@testing-library/react";
import NavBar from "../components/Navbar";
import "@testing-library/jest-dom";

describe("Navbar", () => {
  it("checks position of navigation", () => {
    render(<NavBar />);

    const navbar = screen.getByRole("navbar");

    expect(navbar).toBeInTheDocument();
  });
});
