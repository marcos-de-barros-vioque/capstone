import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

export function Header() {
  return (
    <StyledHeaderContainer>
      <StyledLogo href="/">
        <Image
          src="/logo_small_icon_only_inverted.png"
          alt="Spendator app"
          width="50"
          height="50"
        />
      </StyledLogo>
    </StyledHeaderContainer>
  );
}

const StyledHeaderContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: left;
  position: fixed;
  width: 100%;
  background-color: #549b8c;
  top: 0;
`;

const StyledLogo = styled(Link)`
  text-decoration: none;
  margin: 1.5vh 0px 1vh 2.5vw;
`;
