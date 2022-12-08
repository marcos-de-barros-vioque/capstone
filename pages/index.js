import Head from "next/head";
import styled from "styled-components";
import Image from "next/image";
import CategoriesCard from "./../components/CategoriesCard";

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
            width={225}
            height={150}
          />
          <CategoriesCard />
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
  margin-top: 12vh;
  color: #006269;
`;
