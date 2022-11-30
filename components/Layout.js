import {WelcomeCard} from "../components/WelcomeCard";
import styled from "styled-components";
import {Icon} from "@iconify/react";

export function Layout() {
  return (
    <>
      <WelcomeCard />
      <Navbar role="navbar">
        <NavList>
          <NavItem>
            <Icon
              icon="material-symbols:home-outline"
              alt="Home Page Icon"
              width="60"
              height="60"
            />
          </NavItem>
          <NavItem>
            <Icon
              icon="material-symbols:add"
              alt="Add Spendings Page Icon"
              width="60"
              height="60"
            />
          </NavItem>
          <NavItem>
            <Icon
              icon="icons8:idea"
              alt="Tips & Tricks Page Icon"
              width="60"
              height="60"
            />
          </NavItem>
          <NavItem>
            <Icon
              icon="mdi:trophy-outline"
              alt="Rewards Page Icon"
              width="60"
              height="60"
            />
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
  color: #004A4F;
`;
