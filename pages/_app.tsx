import "../styles/globals.scss";
import type { AppProps } from "next/app";

import MuiThemeProvider from "../utils/helpers/themeProvider";
import MenuContextProvider from "../context/menu/menuContextProvider";
import PageLoadContextProvider from "../context/pageLoad/pageLoadContextProvider";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MuiThemeProvider>
      <MenuContextProvider>
        <PageLoadContextProvider>
          <Component {...pageProps} />
        </PageLoadContextProvider>
      </MenuContextProvider>
    </MuiThemeProvider>
  );
}

export default MyApp;
