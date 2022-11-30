import Head from "next/head";
import {WelcomeCard} from "../components/WelcomeCard";

export default function Home({children}) {
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
      {children}
      <WelcomeCard />
    </>
  );
}
