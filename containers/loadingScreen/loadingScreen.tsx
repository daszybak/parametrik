import usePageLoad from "../../utils/hooks/usePageLoad";

import { useContext } from "react";

import useBodyScroll from "../../utils/hooks/useBodyScroll";

import styles from "./loadingScreen.module.scss";
import LoadingBar from "../../components/loadingBar/loadingBar";
import PageLoadContext from "../../context/pageLoad/pageLoad";
import Video from "../../components/video/video";

const LoadingScreen = () => {
  return (
    <div className={styles.loadingScreen}>
      <div className={styles["video-container"]}>
        <Video />
      </div>
    </div>
  );
};

export default LoadingScreen;
