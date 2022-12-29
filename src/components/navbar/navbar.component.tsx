import { Container, Flex, useMantineTheme } from '@mantine/core';
import { useContext } from 'react';
import { HeroContext } from 'src/context/hero/heroContextProvider';
import Logo from '../logo/logo.component';
import Menu from './menu/menu.component';
import { useStyles } from './navbar.styles';

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
  const { classes } = useStyles();
  const { isIntersecting } = useContext(HeroContext);
  const theme = useMantineTheme();

  return (
    <header>
      <Container
        fluid
        className={classes.navbar}
        style={{
          backgroundColor: isIntersecting ? 'transparent' : theme.colors.blue[7],
        }}
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
