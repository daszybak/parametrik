import { Container, Flex } from '@mantine/core';
import { useContext } from 'react';
import { HeroContext } from 'src/context/hero/heroContextProvider';
import Logo from '../logo/logo.component';
import Menu from './menu/menu.component';
import { useStyles } from './navbar.styles';

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
  const { classes } = useStyles();
  const { navRef /*isIntersecting*/ } = useContext(HeroContext);

  return (
    <header>
      <Container
        fluid
        className={classes.navbar}
        style={{
          backgroundColor: 'transparent',
        }}
        ref={navRef}
      >
        <Flex justify="space-between" align="center">
          <Logo />
          <Menu />
        </Flex>
      </Container>
    </header>
  );
};
export default Navbar;
