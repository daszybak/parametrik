import { useLayoutEffect } from "react";

const useBodyScroll = (state: boolean) => {
  useLayoutEffect(() => {
    if (state) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [state]);
};

export default useBodyScroll;
