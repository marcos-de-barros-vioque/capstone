import GlobalStyles from "../styles/GlobalStyles";
import {Layout} from "../components/Layout";
import {Header} from "../components/Header";
import {useLocalStorage} from "../helpers/hooks";
import initialState from "../helpers/db.json";

function MyApp({Component, pageProps}) {
  const [spendingInput, setSpendingInput] = useLocalStorage(
    "spendingInput",
    []
  );

  const [amount, setAmount] = useLocalStorage("amount", []);

  const [tips, setTips] = useLocalStorage("tips", initialState);

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

  function toggleBookmarking(tipId) {
    setTips(tips => {
      const newBookmark = tips.map(tip => {
        if (tip.id === tipId) {
          return {...tip, isBookmarked: !tip.isBookmarked};
        } else {
          return tip;
        }
      });
      return newBookmark;
    });
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
        tips={tips}
        setTips={setTips}
        toggleBookmarking={toggleBookmarking}
      />
      <Layout />
    </>
  );
}

export default MyApp;
