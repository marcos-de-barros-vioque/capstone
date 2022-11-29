import {render, screen} from "@testing-library/react";
import Navbar from "../components/Navbar";
import "@testing-library/jest-dom";

describe("Navbar", () => {
  it("checks position of navigation", () => {
    render(<Navbar />);

    const navbar = screen.getByRole("navbar");

    expect(navbar).toBeInTheDocument();
  });
});
