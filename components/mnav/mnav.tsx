import { useContext } from "react";

import MenuContext from "../../context/menu/menu";

import styles from "./mnav.module.scss";

const MNav = () => {
  const { isOpen } = useContext(MenuContext);

  return (
    <nav className={`${styles.mnav} ${isOpen ? styles.isActive : ""}`}>
      MNav
    </nav>
  );
};

export default MNav;
