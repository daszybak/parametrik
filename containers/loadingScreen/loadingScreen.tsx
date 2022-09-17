import usePageLoad from "../../utils/hooks/usePageLoad";
import Image from "next/image";

import { useContext, useEffect } from "react";

import useBodyScroll from "../../utils/hooks/useBodyScroll";

import styles from "./loadingScreen.module.scss";
import LoadingBar from "../../components/loadingBar/loadingBar";
import PageLoadContext from "../../context/pageLoad/pageLoad";
import Video from "../../components/video/video";
import LoadingVideo from "../../components/loadingVideo/loadingVideo";

const LoadingScreen = () => {
  const { isLoaded } = useContext(PageLoadContext);

  return (
    <div className={`${styles.loadingScreen}`}>
      <div className={styles["video-container"]}>
        <Image
          src="/videos/loading3sec-unscreen.gif"
          alt="Car sheets connecting"
          width={640}
          height={360}
          priority={true}
        />
      </div>
    </div>
  );
};

export default LoadingScreen;
