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
  top: 0;
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

const StyledLogo = styled(Link)`
  text-decoration: none;
  margin: 1.5vh 0px 1vh 2.5vw;
`;
