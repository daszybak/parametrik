import Image from "next/image";
import styles from "./logos.module.scss";

const Logos = ({
  title,
  data,
}: {
  title: string;
  data: Array<{ src: string; alt: string }>;
}) => {
  const renderedLogos: React.ReactElement[] = data.map(({ src, alt }) => {
    return (
      <li key={alt}>
        <Image src={src} alt={alt} width={50} height={50} />
      </li>
    );
  });

  return (
    <div className={styles.projects}>
      <h1>{title}</h1>
      <ul>{renderedLogos}</ul>
    </div>
  );
};

export default Logos;
