import Image from "next/image";
import Link from "next/link";

import { useContext, useEffect, useRef } from "react";

import MenuContext from "../../context/menu/menu";
import usePosition from "../../utils/hooks/usePosition";
import MNav from "../mnav/mnav";

import Toggler from "../../components/toggler/toggler";

import styles from "./navbar.module.scss";
import Logo from "../../components/logo/logo";

const Navbar: React.FC = () => {
  const position = usePosition(7);
  const { isOpen, handleMenuClose } = useContext(MenuContext);
  const backgroundRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (backgroundRef.current) {
      backgroundRef.current.style.top = `${
        document.body.getBoundingClientRect().top * -1
      }px`;
    }
  }, [isOpen]);

  return (
    <>
      <header
        className={`${styles.navbar} ${
          position === "hidden" ? styles.isHidden : ""
        } ${position === "fixed" ? styles.isFixed : ""}
        ${position === "absolute" ? styles.isAbsolute : ""}
      `}
      >
        <div className={styles.container}>
          <div className={styles.logo}>
            <Link href={"/"}>
              <a onClick={handleMenuClose}>
                <Logo />
              </a>
            </Link>
          </div>
          <div className={styles.toggler}>
            <Toggler />
          </div>
        </div>
        <MNav />
      </header>
      <div
        className={`${styles.background} ${isOpen ? styles.isOpen : ""}`}
        ref={backgroundRef}
      ></div>
    </>
  );
};

export default Navbar;
