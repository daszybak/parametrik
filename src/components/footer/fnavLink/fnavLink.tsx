import NextLink from 'next/link';
import React, { useContext } from 'react';
import { MenuContext } from 'src/context/menu/menuContextProvider';

import styles from './fnavLink.module.scss';

const FNavLink = ({ src, title }: { src: string; title: string }) => {
  const { handleMenu } = useContext(MenuContext);

  return (
    <NextLink
      href={src}
      onClick={() => handleMenu('close')}
      onKeyDown={() => handleMenu('close')}
      role="navigation"
      className={styles.link}
    >
      {title}
    </NextLink>
  );
};

export default FNavLink;
