import { Burger, Flex, Transition } from '@mantine/core';
import { useViewportSize } from '@mantine/hooks';
import Link from 'next/link';
import { useContext } from 'react';
import Language from 'src/components/language/language.component';
import { HeroContext } from 'src/context/hero/heroContextProvider';
import { MenuContext } from 'src/context/menu/menuContextProvider';
import { useLinks } from 'src/links';
import MobileMenu from '../mobile-menu/mobile-menu.component';
import { useStyles } from './menu.styles';

interface MenuProps {}

const Menu: React.FC<MenuProps> = () => {
  const { classes, theme } = useStyles();
  const { handleMenu, isOpen } = useContext(MenuContext);
  const links = useLinks();
  const { isIntersecting } = useContext(HeroContext);
  const { width } = useViewportSize();

  const renderedLinks = links.map(({ href, title }) => (
    <Link key={href} href={href} className={classes.link} data-intersecting={isIntersecting}>
      {title}
    </Link>
  ));

  return (
    <>
      <Transition mounted={isOpen} transition="slide-left" timingFunction="ease">
        {(styles) => (
          <nav>
            {width < 1100 ? (
              <MobileMenu
                opened={isOpen}
                onClose={() => handleMenu('close')}
                className={classes.mobileMenu}
                style={{ ...styles, display: width < 1100 ? 'block' : 'none' }}
              />
            ) : (
              <Flex style={{ ...styles }} justify="space-between" gap="2rem" align="center">
                <>
                  {renderedLinks}
                  <Language
                    size="lg"
                    className={classes.link}
                    transform="uppercase"
                    data-intersecting={isIntersecting}
                  />
                </>
              </Flex>
            )}
          </nav>
        )}
      </Transition>

      <Burger
        onClick={() => handleMenu('toggle')}
        opened={isOpen}
        color={theme.colors.green[4]}
        size={width! < 1050 ? 'md' : 'lg'}
      />
    </>
  );
};

export default Menu;
