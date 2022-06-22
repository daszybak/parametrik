import Image from "next/image";
import Link from "next/link";

import { useContext, useLayoutEffect, useRef } from "react";

import MenuContext from "../../context/menu/menu";
import usePosition from "../../utils/hooks/usePosition";
import MNav from "../mnav/mnav";

import Toggler from "../../components/toggler/toggler";

import styles from "./navbar.module.scss";

const Navbar: React.FC = () => {
  const position = usePosition(7);
  const { isOpen, handleMenuClose } = useContext(MenuContext);
  const backgroundRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
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
                <Image
                  src={"/logo.png"}
                  alt="Parametrik Engineering"
                  width={220}
                  height={45}
                  priority={true}
                />
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
