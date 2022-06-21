import usePosition from "../../utils/hooks/usePosition";
import { Children } from "../../utils/interfaces/interfaces";

import styles from "./firstSection.module.scss";

const FirstSection = ({ children }: Children) => {
  const position = usePosition();

  return (
    <div
      className={`${styles.firstSection} ${
        position === "fixed" ? styles.navIsFixed : ""
      } ${position === "hidden" ? styles.navIsHidden : ""}`}
    >
      {children}
    </div>
  );
};

export default FirstSection;
