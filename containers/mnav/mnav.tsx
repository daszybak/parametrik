import { useContext, useLayoutEffect } from "react";

import MenuContext from "../../context/menu/menu";
import useBodyScroll from "../../utils/hooks/useBodyScroll";
import Links from "../../components/links/links";

import links from "../../data/links.json";

import styles from "./mnav.module.scss";

const MNav = () => {
  const { isOpen } = useContext(MenuContext);

  useBodyScroll(isOpen);

  return (
    <nav className={`${styles.mnav} ${isOpen ? styles.isActive : ""}`}>
      <div className="wrapper">
        <div>
          <Links data={links} className={"t-2"} />
        </div>
      </div>
    </nav>
  );
};

export default MNav;
