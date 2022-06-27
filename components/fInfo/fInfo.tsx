import { RiFacebookBoxLine, RiLinkedinBoxLine } from "react-icons/ri";
import styles from "./fInfo.module.scss";

const FInfo = () => {
  return (
    <div className={styles.fInfo}>
      <div className={styles["grid-l"]}>
        <div className={styles.item}>
          <div className={styles.title}>CONTACT</div>
          <div className={styles["grid-sm"]}>
            <div className={styles.text}>
              <div className={styles.line}>
                <a href="mailto:info@parametrik.hr">info@parametrik.hr</a>
              </div>
              <div className={styles.line}>
                <a href="tel:+38591123456"> tel: +385 91 123456</a>
              </div>
            </div>
            <div className={styles.text}>
              <div className={styles.line}>
                Parametrik d.o.o. <br />
                HR-10000 Zagreb <br />
                Zagrebačka cesta 143a
              </div>
            </div>
          </div>
        </div>
        <div className={styles.item}>
          <div className={styles.title}>FIND US ON</div>
          <div className={styles.text}>
            <div className={styles.line}>
              <a href="https://www.linkedin.com/parametrik.hr">
                <RiLinkedinBoxLine className={styles.icon} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FInfo;
