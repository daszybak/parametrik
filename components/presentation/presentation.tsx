import styles from "./presentation.module.scss";

const Presentation = () => {
  return (
    <div className={styles.presentation}>
      <div className={styles.presentationContainer}>
        <div className={styles.video}>Video</div>
        <div className={styles.box}>Box</div>
        <div className={styles.box}>Box</div>
        <div className={styles.box}>Box</div>
        <div className={styles.box}>Box</div>
        <div className={styles.box}>Box</div>
      </div>
    </div>
  );
};

export default Presentation;
