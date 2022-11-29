//import {Navbar} from "./Navbar";
import {WelcomeCard} from "../components/WelcomeCard";
import styled from "styled-components";
import Image from "next/image";

export function Layout() {
  return (
    <>
      <WelcomeCard />
      <Navbar role="navbar">
      <NavList>
          <NavItem>
            <Image
              src="/home.png"
              alt="Home Page Icon"
              width={40}
              height={40}
            />
          </NavItem>
          <NavItem>
            <Image
              src="/add-spending.png"
              alt="Add Spendings Page Icon"
              width={40}
              height={40}
            />
          </NavItem>
          <NavItem>
            <Image
              src="/tips-tricks.png"
              alt="Tips & Tricks Page Icon"
              width={40}
              height={40}
            />
          </NavItem>
          <NavItem>
            <Image
              src="/rewards.png"
              alt="Rewards Page Icon"
              width={40}
              height={40}
            />
          </NavItem>
        </NavList>
      </Navbar>
    </>
  );
}

const Navbar = styled.nav`
  border-top: 3px solid black;
  position: fixed;
  bottom: 0;
  width: 100%;
`;

const NavList = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 10vh;
`;

const NavItem = styled.li`
  text-decoration: none;
`;
