import NextLink from "next/link";
import React, { useContext } from "react";
import MenuContext from "../../context/menu/menu";

import styles from "./fnavLink.module.scss";

const FNavLink = ({
  src,
  title,
  className,
  menuLink,
}: {
  src: string;
  title: string;
  className?: string;
  menuLink?: boolean;
}) => {
  const { handleMenuClose } = useContext(MenuContext);

  return (
    <NextLink href={src}>
      <a className={`${styles.link} ${className}`} onClick={handleMenuClose}>
        {title}
      </a>
    </NextLink>
  );
};

export default FNavLink;
