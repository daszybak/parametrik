import { ReactElement, useReducer } from "react";

import VideoLoadContext from "./videoLoad";

interface VideoContextInitialProps {
  isLoaded: boolean;
  isStarted: boolean;
  isFinished: boolean;
}

const initialValue: VideoContextInitialProps = {
  isLoaded: false,
  isStarted: false,
  isFinished: false,
};

const videoReducer = (
  state: VideoContextInitialProps,
  action: {
    type: string;
    payload?: any;
  }
) => {
  if (action.type === "LOADED") {
    return {
      ...state,
      isLoaded: true,
    };
  }
  if (action.type === "STARTED") {
    return {
      ...state,
      isStarted: true,
      isLoaded: true,
    };
  }
  if (action.type === "STARTED") {
    return {
      ...state,
      isStarted: true,
      isLoaded: true,
      isFinished: true,
    };
  }

  throw new Error("Unavailable action type on videoReducer");
};

const VideoLoadContextProvider = ({ children }: { children: ReactElement }) => {
  const [video, dispatchVideo] = useReducer(videoReducer, initialValue);

  const handleVideoStarted = () => {
    dispatchVideo({ type: "STARTED" });
  };
  const handleVideoLoaded = () => {
    dispatchVideo({ type: "LOADED" });
  };
  const handleVideoFinished = () => {
    dispatchVideo({ type: "FINISHED" });
  };

  const videoContext = {
    isLoaded: video.isLoaded,
    isStarted: video.isStarted,
    isFinished: video.isFinished,
    handleVideoStarted,
    handleVideoLoaded,
    handleVideoFinished,
  };

  return (
    <VideoLoadContext.Provider value={videoContext}>
      {children}
    </VideoLoadContext.Provider>
  );
};

export default VideoLoadContextProvider;
