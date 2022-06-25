import FNavLinks from "../../components/fnavLinks/fnavLinks";
import styles from "./fnav.module.scss";

const FNav = () => {
  return (
    <nav className={styles.fnav}>
      <FNavLinks />
    </nav>
  );
};

export default FNav;
