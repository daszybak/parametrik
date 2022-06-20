import styles from "./toggler.module.scss";

const Toggler = () => {
  const handleOnTogglerClick = () => {};

  return (
    <span className={styles.toggler} onClick={handleOnTogglerClick}>
      <span className={styles.top}></span>
      <span className={styles.middle}></span>
      <span className={styles.bottom}></span>
    </span>
  );
};

export default Toggler;
