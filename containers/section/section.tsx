import { Children } from "../../utils/helpers/interfaces/interfaces";

import styles from "./section.module.scss";

const Section = ({ children }: Children) => {
  return (
    <div className={styles.section}>
      <div className={styles["section-inside"]}>{children}</div>
    </div>
  );
};

export default Section;
