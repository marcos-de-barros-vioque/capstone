import styled from "styled-components";
import {Icon} from "@iconify/react";
import Link from "next/link";
import {WelcomeCard} from "../components/WelcomeCard";

export function Layout() {
  return (
    <>
      <WelcomeCard />
      <Navbar role="navbar">
        <NavList>
          <NavItem>
            <Link href="/">
              <Icon
                icon="material-symbols:home-outline"
                alt="Home Page Icon"
                width="60"
                height="60"
              />
            </Link>
          </NavItem>
          <NavItem>
            <Link href="/addspending">
              <Icon
                icon="material-symbols:add"
                alt="Add Spendings Page Icon"
                width="60"
                height="60"
              />
            </Link>
          </NavItem>
          <NavItem>
            <Link href="/tips">
              <Icon
                icon="icons8:idea"
                alt="Tips & Tricks Page Icon"
                width="60"
                height="60"
              />
            </Link>
          </NavItem>
          <NavItem>
            <Link href="/awards">
              <Icon
                icon="mdi:trophy-outline"
                alt="Awards Page Icon"
                width="60"
                height="60"
              />
            </Link>
          </NavItem>
        </NavList>
      </Navbar>
    </>
  );
}

export const Navbar = styled.nav`
  border-top: 3px solid #006269;
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
  color: #006269;
`;
