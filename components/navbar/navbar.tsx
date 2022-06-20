import Image from "next/image";
import Link from "next/link";

import { useReducer, useEffect } from "react";

import { Action } from "../../utils/helpers/interfaces/interfaces";

import Toggler from "../toggler/toggler";

import styles from "./navbar.module.scss";

interface State {
  position: string;
  Y: number;
}

const initialNavbarState = {
  position: "absolute",
  Y: 0,
};

const navbarReducer = (state: State, action: Action) => {
  if (action.type === "absolute") {
    return {
      position: "absolute",
      Y: action.payload,
    };
  }
  if (action.type === "fixed") {
    return {
      position: "fixed",
      Y: action.payload,
    };
  }
  if (action.type === "hidden") {
    return {
      position: "hidden",
      Y: action.payload,
    };
  }

  throw new Error("Navbar action unavailable");
};

const Navbar: React.FC = () => {
  const [navbar, dispatchNavbar] = useReducer(
    navbarReducer,
    initialNavbarState
  );

  useEffect(() => {
    if (typeof window === "undefined") return;
    const handleWindowScroll = () => {
      if (window.scrollY > navbar.Y) {
        return dispatchNavbar({ type: "hidden", payload: window.scrollY });
      }
      if (window.scrollY < navbar.Y && window.scrollY !== 0) {
        return dispatchNavbar({ type: "fixed", payload: window.scrollY });
      }
      if (window.scrollY === 0) {
        return dispatchNavbar({ type: "absolute", payload: window.scrollY });
      }
    };

    window.addEventListener("scroll", handleWindowScroll);

    return () => {
      window.removeEventListener("scroll", handleWindowScroll);
    };
  }, [navbar]);

  return (
    <nav
      className={`${styles.navbar} ${
        navbar.position === "hidden" ? styles.isHidden : ""
      } ${navbar.position === "fixed" ? styles.isFixed : ""}
        ${navbar.position === "absolute" ? styles.isAbsolute : ""}
      `}
    >
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link href={"/"}>
            <a>
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
    </nav>
  );
};

export default Navbar;
