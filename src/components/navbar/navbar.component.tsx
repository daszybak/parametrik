'use client';

import { Container, Flex } from '@mantine/core';
import Logo from '../logo/logo.component';
import Menu from './menu/menu.component';
import { useStyles } from './navbar.styles';

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
  const { classes } = useStyles();

  return (
    <header>
      <Container fluid className={classes.navbar}>
        <Flex justify="space-between" align="center">
          <Logo />
          <Menu />
        </Flex>
      </Container>
    </header>
  );
};
export default Navbar;
