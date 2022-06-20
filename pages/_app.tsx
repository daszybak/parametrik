import "../styles/globals.scss";
import type { AppProps } from "next/app";
import MuiThemeProvider from "../utils/helpers/themeProvider";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MuiThemeProvider>
      <Component {...pageProps} />
    </MuiThemeProvider>
  );
}

export default MyApp;
