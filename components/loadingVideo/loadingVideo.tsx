import { useContext, useEffect, useRef } from "react";
import VideoLoadContext from "../../context/videoLoad/videoLoad";

import styles from "./loadingVideo.module.scss";

const LoadingVideo = () => {
  const videoContainer = useRef<HTMLVideoElement>(null);
  const {
    handleVideoStarted,
    handleVideoLoaded: handleVideoLoadedCxt,
    handleVideoFinished,
  } = useContext(VideoLoadContext);

  useEffect(() => {
    const video = videoContainer.current;

    const handleVideoEnded = () => {
      handleVideoFinished();
    };
    const handleVideoLoaded = async () => {
      if (!video) return;
      handleVideoLoadedCxt();
      await video.play();
      handleVideoStarted();
      video.addEventListener("ended", handleVideoEnded);
    };

    if (video) {
      video.addEventListener("loadeddata", handleVideoLoaded);
    }

    return () => {
      if (video) {
        video.removeEventListener("loadeddata", handleVideoLoaded);
        video.removeEventListener("ended", handleVideoEnded);
      }
    };
  });

  return (
    <video height="720" width="1280" ref={videoContainer}>
      <source src="/videos/loading3sec.mp4" type="video/mp4" />
    </video>
  );
};

export default LoadingVideo;
