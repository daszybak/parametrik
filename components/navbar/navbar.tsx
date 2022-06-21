import Image from "next/image";
import Link from "next/link";

import usePosition from "../../utils/hooks/usePosition";
import MNav from "../mnav/mnav";

import Toggler from "../toggler/toggler";

import styles from "./navbar.module.scss";

const Navbar: React.FC = () => {
  const position = usePosition();

  return (
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
      <MNav />
    </header>
  );
};

export default Navbar;
