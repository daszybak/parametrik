import { useRouter } from "next/router";
import { useEffect, useReducer } from "react";

import { Action } from "../../utils/interfaces/interfaces";

interface State {
  isLoaded: boolean;
}

const initialPageValue: State = {
  isLoaded: false,
};

const pageReducer = (state: State, action: Action) => {
  if (action.type === "loaded") {
    return {
      isLoaded: true,
    };
  }
  if (action.type === "unloaded") {
    return {
      isLoaded: false,
    };
  }
  if (action.type === "toggle") {
    return {
      isLoaded: !state.isLoaded,
    };
  }
  throw new Error("Page action unavailable");
};

const usePageLoad = (time: number) => {
  const router = useRouter();
  const [page, dispatchPage] = useReducer(pageReducer, initialPageValue);

  const handlePageLoad = () => {
    console.log("loaded");

    dispatchPage({ type: "loaded" });
  };

  const handlePageUnload = () => {
    dispatchPage({ type: "unloaded" });
  };

  const handlePageToggle = () => {
    dispatchPage({ type: "toggle" });
  };

  useEffect(() => {
    // router.events.on("routeChangeError", handlePageUnload);
    // router.events.on("routeChangeStart", handlePageUnload);

    const wait = () => {
      return new Promise((resolve) => {
        setTimeout(() => {
          handlePageLoad();
        }, time);
      });
    };

    const waitFunc = async () => {
      try {
        console.log("time", time);

        await wait();
        console.log("waited");
      } catch (error) {
        console.error(error);
      }
    };

    waitFunc();
  }, [router.events, time]);

  // return () => {
  //   router.events.off("routeChangeError", handlePageUnload);
  //   router.events.off("routeChangeStart", handlePageUnload);
  // };

  return page.isLoaded;
};

export default usePageLoad;
