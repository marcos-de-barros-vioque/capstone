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
            <Link href="/bookmarks">
              <StyledIcon
                icon="fluent:bookmark-search-24-regular"
                alt="Bookmarks Page Icon"
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
  background: hsla(110, 78%, 59%, 1);

  background: radial-gradient(
    circle,
    hsla(110, 78%, 59%, 1) 0%,
    hsla(174, 76%, 38%, 1) 100%
  );

  background: -moz-radial-gradient(
    circle,
    hsla(110, 78%, 59%, 1) 0%,
    hsla(174, 76%, 38%, 1) 100%
  );

  background: -webkit-radial-gradient(
    circle,
    hsla(110, 78%, 59%, 1) 0%,
    hsla(174, 76%, 38%, 1) 100%
  );

  filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#61E846", endColorstr="#17AB9C", GradientType=1 );
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
  color: #004a4f;
`;
