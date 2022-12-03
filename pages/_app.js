import GlobalStyles from "../styles/GlobalStyles";
import {Layout} from "../components/Layout";
import {Header} from "../components/Header";
import { useLocalStorage } from "../helpers/hooks";

function MyApp({Component, pageProps}) {
  const [addSpending, setAddSpending] = useLocalStorage("addSpending",[]);

  function addAddSpending(addSpending) {
    setAddSpending((previousAddSpending) => [
      ...previousAddSpending,
      {
        adding: addSpending.adding,
        addFor: addSpending.addFor,
      },
    ]);
  }

  return (
    <>
      <GlobalStyles />
      <Header />
      <Component {...pageProps} 
      addSpending={addSpending}
      onAddAddSpending={addAddSpending}
      />
      <Layout />
    </>
  );
}

export default MyApp;
