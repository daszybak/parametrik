import { useReducer } from "react";

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

  throw new Error("Action unavailable");
};

const MenuContextProvider = ({ children }: ReactNode) => {
  const [menu, dispatchMenu] = useReducer(menuReducer, menuInitialState);

  const handleMenuClose = () => {
    dispatchMenu({ type: "close" });
  };

  const handleMenuOpen = () => {
    dispatchMenu({ type: "open" });
  };

  const menuContext = {
    isOpen: menu.isOpen,
    handleMenuClose,
    handleMenuOpen,
  };

  return (
    <MenuContext.Provider value={menuContext}>{children}</MenuContext.Provider>
  );
};

export default MenuContextProvider;
