import NextLink from "next/link";
import React, { useContext } from "react";
import MenuContext from "../../context/menu/menu";

import styles from "./link.module.scss";

const Link = ({
  src,
  title,
  icon,
  className,
  menuLink,
}: {
  src: string;
  title: string;
  icon: React.ReactNode;
  className: string;
  menuLink: boolean;
}) => {
  const { handleMenuClose } = useContext(MenuContext);

  return (
    //   style={
    //     isOpen && menuLink
    //       ? { opacity: 1, transform: `translate(0px, 0px)` }
    //       : undefined
    //   }

    <NextLink href={src}>
      <a className={`${styles.link} ${className}`} onClick={handleMenuClose}>
        {icon}
        {title}
      </a>
    </NextLink>
  );
};

export default Link;
