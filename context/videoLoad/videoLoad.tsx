import { createContext } from "react";

const VideoLoadContext = createContext({
  isLoaded: false,
  isFinished: false,
  handleVideoStarted: () => {},
  handleVideoFinished: () => {},
  handleVideoLoaded: () => {},
});

export default VideoLoadContext;
