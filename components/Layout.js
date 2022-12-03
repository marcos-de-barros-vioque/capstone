import styled from "styled-components";
import {Icon} from "@iconify/react";
import Link from "next/link";

export function Layout() {
  return (
    <>
      <Navbar role="navbar">
        <NavList>
          <NavItem>
            <Link href="/">
              <StyledIcon
                icon="material-symbols:home-outline"
                alt="Home Page Icon"
                width="40"
                height="40"
              />
            </Link>
          </NavItem>
          <NavItem>
            <Link href="/addspending">
              <StyledIcon
                icon="material-symbols:add"
                alt="Add Spendings Page Icon"
                width="40"
                height="40"
              />
            </Link>
          </NavItem>
          <NavItem>
            <Link href="/tips">
              <StyledIcon
                icon="icons8:idea"
                alt="Tips & Tricks Page Icon"
                width="40"
                height="40"
              />
            </Link>
          </NavItem>
          <NavItem>
            <Link href="/awards">
              <StyledIcon
                icon="mdi:trophy-outline"
                alt="Awards Page Icon"
                width="40"
                height="40"
              />
            </Link>
          </NavItem>
        </NavList>
      </Navbar>
    </>
  );
}

export const Navbar = styled.nav`
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: #549b8c;
`;

const NavList = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 8vh;
`;

const NavItem = styled.li`
  text-decoration: none;
`;

const StyledIcon = styled(Icon)`
  color: #004A4F;
`;
