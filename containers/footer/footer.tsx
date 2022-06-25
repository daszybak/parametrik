import Image from "next/image";
import Logo from "../../components/logo/logo";
import FNav from "../fnav/fnav";

import styles from "./footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className="wrapper">
        <div className="text-center">
          <div className={styles.logo}>
            <Logo />
          </div>
          <FNav />
        </div>
      </div>
    </div>
  );
};

export default Footer;
