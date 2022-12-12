import GlobalStyles from "../styles/GlobalStyles";
import {Layout} from "../components/Layout";
import {Header} from "../components/Header";
import {useLocalStorage} from "../helpers/hooks";

function MyApp({Component, pageProps}) {
  const [spendingInput, setSpendingInput] = useLocalStorage(
    "spendingInput",
    []
  );

  const [amount, setAmount] = useLocalStorage("amount", []);

  function addSpendingInput(spendingInput) {
    setSpendingInput(previousSpendingInput => [
      {
        title: spendingInput.title,
        amount: spendingInput.amount,
        date: spendingInput.date,
        category: spendingInput.category,
      },
      ...previousSpendingInput,
    ]);
  }

  function addAmount(amount) {
    setAmount(previousAmount => [
      ...previousAmount,
      {
        amount: Number.parseFloat(amount.amount),
      },
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
        amount={amount}
        onAddAmount={addAmount}
      />
      <Layout />
    </>
  );
}

export default MyApp;
