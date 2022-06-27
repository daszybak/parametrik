import FNavLink from "../fnavLink/fnavLink";
import links from "../../data/links";

import styles from "./fnavLinks.module.scss";

const FNavLinks = () => {
  const renderedLinks = links.map(
    ({ src, title }: { src: string; title: string }) => {
      return (
        <li key={src}>
          <FNavLink src={src} title={title} />
        </li>
      );
    }
  );

  return (
    <>
      <ul className={styles.links}>{renderedLinks}</ul>
    </>
  );
};

export default FNavLinks;
