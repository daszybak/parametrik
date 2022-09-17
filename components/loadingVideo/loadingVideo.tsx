import { useContext, useEffect, useRef } from 'react';
import VideoLoadContext from '../../context/videoLoad/videoLoad';
import useWindowSize from '../../utils/hooks/useWindowSize';

import styles from './loadingVideo.module.scss';

const LoadingVideo = () => {
  const [videoLoad, setVideoLoad] = useState(false);
  const videoContainer = useRef<HTMLVideoElement>(null);
  const width = useWindowSize().width;

  const {
    handleVideoStarted,
    handleVideoLoaded: handleVideoLoadedCxt,
    handleVideoFinished,
  } = useContext(VideoLoadContext);

  useEffect(() => {
    const video = videoContainer.current;

    const handleVideoEnded = () => {
      console.log('video ended');

      handleVideoFinished();
      console.log('video ended');
    };

    const handleVideoCanPlay = async () => {
      console.log('video can play');

      if (!video) return;
      handleVideoLoadedCxt();
      video.defaultMuted = true;
      await video.play();
      console.log('video played');

      handleVideoStarted();
      video.addEventListener('ended', handleVideoEnded);
    };

    if (video) {
      video.addEventListener('loadeddata', handleVideoLoaded);
    }

    return () => {
      if (video) {
        video.removeEventListener('loadeddata', handleVideoLoaded);
        video.removeEventListener('ended', handleVideoEnded);
      }
    };
  }, [
    handleVideoStarted,
    handleVideoLoadedCxt,
    handleVideoFinished,
    videoLoad,
  ]);

  return (
    <video
      height="auto"
      width={typeof width !== 'undefined' && width < 1280 ? '100%' : 1280}
      muted
      ref={videoContainer}
    >
      <source src="/videos/loading3sec.mp4" type="video/mp4" />
    </video>
  );
};

export default LoadingVideo;
