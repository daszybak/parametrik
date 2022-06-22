import "../styles/globals.scss";
import type { AppProps } from "next/app";

import MuiThemeProvider from "../utils/helpers/themeProvider";
import MenuContextProvider from "../context/menu/menuContextProvider";
import usePageLoad from "../utils/hooks/usePageLoad";
import LoadingScreen from "../containers/loadingScreen/loadingScreen";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MuiThemeProvider>
      <MenuContextProvider>
        <Component {...pageProps} />
      </MenuContextProvider>
    </MuiThemeProvider>
  );
}

export default MyApp;
