import { createContext } from "react";
import React from "react";

const PageLoadContext = createContext({
  isLoaded: false,
});

export default PageLoadContext;
