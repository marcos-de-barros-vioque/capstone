import GlobalStyles from "../styles/GlobalStyles";
import {Layout} from "../components/Layout";
import {Header} from "../components/Header";
import {useLocalStorage} from "../helpers/hooks";

function MyApp({Component, pageProps}) {
  const [spendingInput, setSpendingInput] = useLocalStorage(
    "spendingInput",
    []
  );

  function addSpendingInput(title, amount, date, category) {
    setSpendingInput(previousSpendingInput => [
      {
        title,
        amount,
        date,
        category,
      },
      ...previousSpendingInput,
    ]);
  }

  return (
    <>
      <GlobalStyles />
      <Header />
      <Component
        {...pageProps}
        spendingInput={spendingInput}
        setSpendingInput={setSpendingInput}
        onAddSpendingInput={addSpendingInput}
      />
      <Layout />
    </>
  );
}

export default MyApp;
