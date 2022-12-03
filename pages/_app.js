import GlobalStyles from "../styles/GlobalStyles";
import {Layout} from "../components/Layout";
import {Header} from "../components/Header";
import { useLocalStorage } from "../helpers/hooks";

function MyApp({Component, pageProps}) {
  const [spendingInput, setSpendingInput] = useLocalStorage("spendingInput",[]);

  return (
    <>
      <GlobalStyles />
      <Header />
      <Component {...pageProps} 
      spendingInput={spendingInput}
      setSpendingInput={setSpendingInput}
      />
      <Layout />
    </>
  );
}

export default MyApp;
