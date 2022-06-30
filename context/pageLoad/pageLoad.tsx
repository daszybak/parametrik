import { createContext } from "react";
import React from "react";

const PageLoadContext = createContext({
  isLoaded: false,
  videoFinished: false,
  handleVideoFinished: () => {},
});

export default PageLoadContext;
