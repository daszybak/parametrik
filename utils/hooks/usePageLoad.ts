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
    dispatchPage({ type: "loaded" });
  };

  const handlePageUnload = () => {
    dispatchPage({ type: "unloaded" });
  };

  const handlePageToggle = () => {
    dispatchPage({ type: "toggle" });
  };

  useEffect(() => {
    router.events.on("routeChangeError", handlePageUnload);
    router.events.on("routeChangeStart", handlePageUnload);

    const wait = (time: number) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          handlePageLoad();
        }, time);
      });
    };

    const waitFunc = async () => {
      try {
        await wait(time);
      } catch (error) {
        console.error(error);
      }
    };

    waitFunc();

    return () => {
      router.events.off("routeChangeError", handlePageUnload);
      router.events.off("routeChangeStart", handlePageUnload);
    };
  }, [router.events, time]);

  return page.isLoaded;
};

export default usePageLoad;
