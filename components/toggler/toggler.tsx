import { useContext } from "react";
import MenuContext from "../../context/menu/menu";

import styles from "./toggler.module.scss";

const Toggler = () => {
  const { handleMenuToggle, isOpen } = useContext(MenuContext);

  return (
    <span
      className={`${styles.toggler} ${isOpen ? styles.isActive : ""}`}
      onClick={handleMenuToggle}
    >
      <span className={`${styles.top} ${styles.line}`}></span>
      <span className={`${styles.middle} ${styles.line}`}></span>
      <span className={`${styles.bottom} ${styles.line}`}></span>
    </span>
  );
};

export default Toggler;
