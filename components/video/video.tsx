import styles from "./video.module.scss";

const Video = ({
  src,
  height,
  width,
}: {
  src?: string;
  height?: number;
  width?: number;
}) => {
  return (
    <video autoPlay height="720" width="1280">
      <source src="/videos/loading3sec.mp4" type="video/mp4" />
    </video>
  );
};

export default Video;
