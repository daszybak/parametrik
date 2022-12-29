import { Container, Flex, Transition, useMantineTheme } from '@mantine/core';
import { useContext, useEffect, useState } from 'react';
import { HeroContext } from 'src/context/hero/heroContextProvider';
import Logo from '../logo/logo.component';
import Menu from './menu/menu.component';
import { useStyles } from './navbar.styles';

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
  const { classes, cx } = useStyles();
  const { isIntersecting } = useContext(HeroContext);
  const theme = useMantineTheme();
  const [lastScroll, setLastScroll] = useState<number>(0);
  const [show, setShow] = useState<boolean>(true);

  const controlNavbar = () => {
    if (window.scrollY > lastScroll) {
      // if scroll down hide the navbar
      setShow(false);
    } else {
      // if scroll up show the navbar
      setShow(true);
    }

    // remember current page location to use in the next move
    setLastScroll(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', controlNavbar);
    return () => window.removeEventListener('scroll', controlNavbar);
  }, [lastScroll]);

  return (
    <Transition mounted={show} transition="fade" duration={300}>
      {(styles) => (
        <header>
          <Container
            fluid
            className={cx(classes.navbar)}
            style={{
              backgroundColor: isIntersecting ? 'transparent' : theme.colors.blue[7],
              ...styles,
            }}
          >
            <Flex justify="space-between" align="center">
              <Logo />
              <Menu />
            </Flex>
          </Container>
        </header>
      )}
    </Transition>
  );
};

export default Navbar;
