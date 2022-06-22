import { useReducer, useEffect } from "react";

import { Action } from "../interfaces/interfaces";
interface State {
  position: string;
  Y: number;
}

const initialElementState = {
  position: "absolute",
  Y: 0,
};

const elementReducer = (state: State, action: Action) => {
  if (action.type === "absolute") {
    return {
      position: "absolute",
      Y: action.payload,
    };
  }
  if (action.type === "fixed") {
    return {
      position: "fixed",
      Y: action.payload,
    };
  }
  if (action.type === "hidden") {
    return {
      position: "hidden",
      Y: action.payload,
    };
  }

  throw new Error("Navbar action unavailable");
};

const usePosition = (pixels: number) => {
  const [element, dispatchElement] = useReducer(
    elementReducer,
    initialElementState
  );

  useEffect(() => {
    const handleWindowScroll = () => {
      if (window.scrollY > document.body.getBoundingClientRect().top - pixels) {
        dispatchElement({ type: "hidden", payload: window.scrollY });
      }
      if (window.scrollY > element.Y + pixels) {
        return dispatchElement({ type: "hidden", payload: window.scrollY });
      }
      if (window.scrollY < element.Y && element.Y - window.scrollY > pixels) {
        return dispatchElement({ type: "fixed", payload: window.scrollY });
      }
      if (window.scrollY <= pixels) {
        return dispatchElement({ type: "absolute", payload: window.scrollY });
      }
    };

    window.addEventListener("scroll", handleWindowScroll);

    return () => {
      window.removeEventListener("scroll", handleWindowScroll);
    };
  }, [element, pixels]);

  return element.position;
};

export default usePosition;
