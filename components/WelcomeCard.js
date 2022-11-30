import styled from "styled-components";
import Image from "next/image";

export function WelcomeCard() {
  return (
    <StyledWelcomeCard>
      <br />
      <br />
      <Image
        src="/logo.png"
        alt="Spendator Branded Logo"
        width={400}
        height={300}
      />
      <br />
      <br />
      <h1>Welcome to your spendings tracker app!</h1>
    </StyledWelcomeCard>
  );
}

const StyledWelcomeCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 400px;
  color: #004a4f;
`;
