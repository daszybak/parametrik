import React from "react";
import usePageLoad from "../../utils/hooks/usePageLoad";
import PageLoadContext from "./pageLoad";

import { LOADING_TIME } from "../../utils/constants/constants";

const PageLoadContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const isLoaded = usePageLoad(LOADING_TIME);

  const pageContext = {
    isLoaded,
  };
  return (
    <PageLoadContext.Provider value={pageContext}>
      {children}
    </PageLoadContext.Provider>
  );
};

export default PageLoadContextProvider;
