import styled from "styled-components";
import Link from "next/link";

export function Navbar() {
    return (
    <>
    <NavBar>
        <NavList>
            <NavItem>
                <Link src="/home.png" alt="Home Page Icon" width={20} height={20}></Link>
            </NavItem>
            <NavItem>
                <Link src="/add-spending.png" alt="Add Spendings Page Icon" width={20} height={20}></Link>
            </NavItem>
            <NavItem>
                <Link src="/tips-tricks.png" alt="Tips & Tricks Page Icon" width={20} height={20}></Link>
            </NavItem>
            <NavItem>
                <Link src="/rewards.png" alt="Rewards Page Icon" width={20} height={20}></Link>
            </NavItem>
      </NavList>
    </NavBar>
    </>
    );
}

const NavBar = styled.nav`
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