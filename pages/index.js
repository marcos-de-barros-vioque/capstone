import Head from "next/head";
import styled from "styled-components";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>Spendator - Your spendings tracker</title>
        <meta
          name="description"
          content="Discover how easily you can monitor your monthly spendings with Spendator!"
        />
        <link rel="icon" href="/logo_icon.png" />
      </Head>
      <div>
        <StyledBody>
          <Image
            src="/logo_small.png"
            alt="Spendator Branded Logo"
            width={300}
            height={200}
          />
          <StyledWelcomeMessage>Welcome to your spendings tracker! Go to the “+” nav icon to start adding your first spending!</StyledWelcomeMessage>
        </StyledBody>
      </div>
    </>
  );
}

const StyledBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 150px;
  color: #006269;
`;

const StyledWelcomeMessage = styled.p`
margin-top: 50px;
justify-content: center;
font-size: 20px;
width: 30%;
`;
