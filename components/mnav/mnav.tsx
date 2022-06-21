import { useContext, useEffect } from "react";

import MenuContext from "../../context/menu/menu";

import styles from "./mnav.module.scss";

const MNav = () => {
  const { isOpen } = useContext(MenuContext);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  });

  return (
    <nav className={`${styles.mnav} ${isOpen ? styles.isActive : ""}`}>
      MNav
    </nav>
  );
};

export default MNav;
