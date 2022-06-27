import { useEffect } from "react";

const useBodyScroll = (state: boolean) => {
  useEffect(() => {
    if (state) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [state]);
};

export default useBodyScroll;
