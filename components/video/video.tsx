import styles from "./video.module.scss";

const Video = () => {
  return (
    <video autoPlay height="720" width="1280">
      <source src="/videos/loading.mp4" type="video/mp4" />
    </video>
  );
};

export default Video;
