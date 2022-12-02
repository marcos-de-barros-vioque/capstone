import GlobalStyles from "../styles/GlobalStyles";
import {Layout} from "../components/Layout";
import {Header} from "../components/Header";
import { useLocalStorage } from "../helpers/hooks";

function MyApp({Component, pageProps}) {
  const [spendingData, setSpendingData] = useLocalStorage("data");

  return (
    <>
      <GlobalStyles />
      <Header />
      <Component {...pageProps} spendingData={spendingData} setSpendingData={setSpendingData} />
      <Layout />
    </>
  );
}

export default MyApp;
