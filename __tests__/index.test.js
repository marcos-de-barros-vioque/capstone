import {render, screen} from "@testing-library/react";
import {Layout} from "../components/Layout";
import "@testing-library/jest-dom";
import {useRouter} from "next/router";

describe("Home", () => {
  const router = useRouter();

  it("checks position of navigation", () => {
    render(<Layout key={router.asPath} />);

    const navbar = screen.getByRole("navbar");

    expect(navbar).toBeInTheDocument();
  });
});
