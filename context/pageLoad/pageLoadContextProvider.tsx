import React, { useRef, useState } from "react";
import usePageLoad from "../../utils/hooks/usePageLoad";
import PageLoadContext from "./pageLoad";

import { LOADING_TIME } from "../../utils/constants/constants";

const PageLoadContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [videoFinished, setVideoFinished] = useState(false);
  const isLoaded = usePageLoad(LOADING_TIME);

  const handleVideoFinished = () => {
    setVideoFinished(true);
  };

  const pageContext = {
    isLoaded,
    videoFinished,
    handleVideoFinished,
  };
  return (
    <PageLoadContext.Provider value={pageContext}>
      {children}
    </PageLoadContext.Provider>
  );
};

export default PageLoadContextProvider;
