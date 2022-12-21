import FNavLinks from '../fnavLinks/fnavLinks';
import styles from './fnav.module.scss';

const FNav = () => (
  <nav className={styles.fnav}>
    <FNavLinks />
  </nav>
);

export default FNav;
