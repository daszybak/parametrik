import NextLink from "next/link";

import styles from "./link.module.scss";

const Link = ({ src, title, className }: { src: string; title: string, className: string }) => {
  return (
    <NextLink href={src}>
      <a className={`${styles.link} ${className}`}>{title}</a>
    </NextLink>
  );
};

export default Link;
