import Toggler from "../toggler/toggler";

import styles from "./navbar.module.scss";

const Navbar: React.FC = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.logo}></div>
        <div className={styles.toggler}>
          <Toggler />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
