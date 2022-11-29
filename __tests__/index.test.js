import {render, screen} from "@testing-library/react";
import Navbar from "../components/Layout";
import "@testing-library/jest-dom";

describe("Home", () => {
  it("checks position of navigation", () => {
    render(<Navbar />);

    const navbar = screen.getByRole("navbar");

    expect(navbar).toBeInTheDocument();
  });
});
