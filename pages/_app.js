import GlobalStyles from "../styles/GlobalStyles";
import {Layout} from "../components/Layout";
import {Header} from "../components/Header";

function MyApp({Component, pageProps}) {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Component {...pageProps} />
      <Layout />
    </>
  );
}

export default MyApp;
