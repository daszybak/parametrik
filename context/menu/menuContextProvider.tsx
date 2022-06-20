import { useReducer } from "react";

import { Children } from "../../utils/helpers/interfaces/interfaces";

import MenuContext from "./menu";

type State = {
  isOpen: boolean;
};

type Action = {
  type: string;
  payload?: any;
};

const menuInitialState: State = {
  isOpen: false,
};

const menuReducer = (state: State, action: Action) => {
  if (action.type === "close") {
    return {
      isOpen: false,
    };
  }
  if (action.type === "open") {
    return {
      isOpen: true,
    };
  }
  if (action.type === "toggle") {
    return {
      isOpen: !state.isOpen,
    };
  }

  throw new Error("Action unavailable");
};

const MenuContextProvider = ({ children }: Children) => {
  const [menu, dispatchMenu] = useReducer(menuReducer, menuInitialState);

  const handleMenuClose = () => {
    dispatchMenu({ type: "close" });
  };

  const handleMenuOpen = () => {
    dispatchMenu({ type: "open" });
  };

  const handleMenuToggle = () => {
    dispatchMenu({ type: "toggle" });
  };

  const menuContext = {
    isOpen: menu.isOpen,
    handleMenuClose,
    handleMenuOpen,
    handleMenuToggle,
  };

  return (
    <MenuContext.Provider value={menuContext}>{children}</MenuContext.Provider>
  );
};

export default MenuContextProvider;
