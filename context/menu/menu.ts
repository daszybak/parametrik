import { createContext } from "react";

const initialValue = {
  isOpen: false,
  handleMenuToggle: () => {},
  handleMenuOpen: () => {},
  handleMenuClose: () => {},
};

const MenuContext = createContext(initialValue);

export default MenuContext;
