import Link from "../link/link";

import styles from "./links.module.scss";

interface Link {
  src: string;
  title: string;
}

const Links = ({
  data,
  className,
}: {
  data: Array<Link>;
  className: string;
}) => {
  const renderedLinks = data.map(({ src, title }) => {
    return <Link src={src} title={title} key={title} className={className} />;
  });

  return <ul className={styles.fadeOutLinks}>{renderedLinks}</ul>;
};

export default Links;
