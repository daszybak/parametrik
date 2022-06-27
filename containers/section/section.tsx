import { Children } from "../../utils/interfaces/interfaces";

import styles from "./section.module.scss";

const Section = ({ children }: Children) => {
  return (
    <div className={styles.section}>
      <div className={styles["section-inside"]}>
        <div className="wrapper">{children}</div>
      </div>
    </div>
  );
};

export default Section;
