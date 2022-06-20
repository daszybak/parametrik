import { createContext } from "react";

const initialValue = {
  isOpen: false,
  handleMenuOpen: () => {},
  handleMenuClose: () => {},
};

const menuContext = createContext(initialValue);

export default menuContext;
