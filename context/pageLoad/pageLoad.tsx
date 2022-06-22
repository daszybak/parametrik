import { createContext } from "react";

const PageLoadContext = createContext({
  isLoaded: false,
});

export default PageLoadContext;
