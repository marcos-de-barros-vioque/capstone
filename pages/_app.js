import GlobalStyles from "../styles/GlobalStyles";
import {Layout} from "../components/Layout";
import {Header} from "../components/Header";
import { useLocalStorage } from "../helpers/hooks";

function MyApp({Component, pageProps}) {
  const [spendingInput, setSpendingInput] = useLocalStorage("spendingInput",[]);

  function addSpendingInput(spendingInput) {
    setSpendingInput((previousSpendingInput) => [
      {
        title: spendingInput.title,
        amount: spendingInput.amount,
        date: spendingInput.date,
        category: spendingInput.category,
      },
      ...previousSpendingInput,
    ]);
  }

  return (
    <>
      <GlobalStyles />
      <Header />
      <Component {...pageProps} 
      spendingInput={spendingInput}
      onAddSpendingInput={addSpendingInput}
      />
      <Layout />
    </>
  );
}

export default MyApp;
