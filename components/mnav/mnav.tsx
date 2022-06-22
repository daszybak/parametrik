import { useContext, useLayoutEffect } from "react";

import MenuContext from "../../context/menu/menu";
import useBodyScroll from "../../utils/hooks/useBodyScroll";

import styles from "./mnav.module.scss";

const MNav = () => {
  const { isOpen } = useContext(MenuContext);

  useBodyScroll(isOpen);

  return (
    <nav className={`${styles.mnav} ${isOpen ? styles.isActive : ""}`}>
      MNav
    </nav>
  );
};

export default MNav;
