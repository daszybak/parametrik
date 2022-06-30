import "../styles/globals.scss";
import type { AppProps } from "next/app";

import MuiThemeProvider from "../utils/helpers/themeProvider";
import MenuContextProvider from "../context/menu/menuContextProvider";
import VideoLoadContextProvider from "../context/videoLoad/videoLoadContextProvider";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MuiThemeProvider>
      <MenuContextProvider>
        <VideoLoadContextProvider>
          <Component {...pageProps} />
        </VideoLoadContextProvider>
      </MenuContextProvider>
    </MuiThemeProvider>
  );
}

export default MyApp;
