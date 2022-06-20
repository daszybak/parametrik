import "../styles/globals.scss";
import type { AppProps } from "next/app";
import MuiThemeProvider from "../utils/helpers/themeProvider";
import MenuContextProvider from "../context/menu/menuContextProvider";

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
