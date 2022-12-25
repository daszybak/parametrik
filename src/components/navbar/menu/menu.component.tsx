import { Anchor, Burger, Flex, Transition } from '@mantine/core';
import Link from 'next/link';
import { useState } from 'react';
import Language from 'src/components/language/language.component';
import { useLinks } from 'src/links';
import { useStyles } from './menu.styles';

interface MenuProps {}

const Menu: React.FC<MenuProps> = () => {
  const { classes, theme } = useStyles();
  const [open, setOpen] = useState(false);
  const links = useLinks();

  const handleToggleMenu = () => {
    setOpen((opened) => !opened);
  };

  const renderedLinks = links.map(({ href, title }) => (
    <Link key={href} href={href}>
      <Anchor size="lg" transform="uppercase" className={classes.link}>
        {title}
      </Anchor>
    </Link>
  ));

  return (
    <>
      <Transition mounted={open} transition="slide-left" timingFunction="ease">
        {(styles) => (
          <nav>
            <Flex style={{ ...styles }} justify="space-between" gap="2rem" align="center">
              <>
                {renderedLinks}
                <Language size="lg" className={classes.link} transform="uppercase" />
              </>
            </Flex>
          </nav>
        )}
      </Transition>
      <Burger onClick={handleToggleMenu} opened={open} color={theme.colors.gray[4]} size="lg" />
    </>
  );
};

export default Menu;
