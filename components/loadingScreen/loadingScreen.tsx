import Video from "../video/video";
import usePageLoad from "../../utils/hooks/usePageLoad";

import useBodyScroll from "../../utils/hooks/useBodyScroll";

import { LOADING_TIME } from "../../utils/constants/constants";

import styles from "./loadingScreen.module.scss";
import LoadingBar from "../loadingBar/loadingBar";

const LoadingScreen = () => {
  const loaded = usePageLoad(LOADING_TIME);

  useBodyScroll(!loaded);

  return (
    <div
      className={`${styles.loadingScreen} ${loaded ? styles.isInactive : ""}`}
    >
      <div className={styles["video-container"]}>
        {/* <Video /> */}
        <LoadingBar />
      </div>
    </div>
  );
};

export default LoadingScreen;
