import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

export function Header() {
    return (
        <StyledHeader>
            <StyledLink href="/">
              <Image
                src="/logo_small_icon_only_inverted.png"
                alt="Spendator app"
                width="20"
                height="20"
              />
            </StyledLink>
        </StyledHeader>
    );
}

const StyledHeader = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: left;
  position: fixed;
  width: 100%;
  top: 0;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;
