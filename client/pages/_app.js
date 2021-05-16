import "../styles/globals.css";
import { Provider } from "react-redux";
import { useStore } from "../store/store";
import { getUsers } from "../store/Actions/getUsers";
import Head from "../utils/head";
import "../styles/styles.css";
function MyApp({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState);
  store.dispatch(getUsers());
  return (
    <Provider store={store}>
      <Head />
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
