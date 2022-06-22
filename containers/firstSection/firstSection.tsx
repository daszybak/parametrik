import usePosition from "../../utils/hooks/usePosition";
import { Children } from "../../utils/interfaces/interfaces";

import styles from "./firstSection.module.scss";

const FirstSection = ({ children }: Children) => {
  const position = usePosition(7);

  return (
    <div
      className={`${styles.firstSection} ${
        position === "fixed" ? styles.navIsFixed : ""
      } ${position === "hidden" ? styles.navIsHidden : ""}
      ${position === "absolute" ? styles.navIsAbsolute : ""}
      `}
    >
      {children}
    </div>
  );
};

export default FirstSection;
