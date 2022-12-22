import { Anchor, Burger, Flex, Transition } from '@mantine/core';
import { useState } from 'react';
import { useStyles } from './menu.styles';

interface MenuProps {}

const Menu: React.FC<MenuProps> = () => {
  const { classes, theme } = useStyles();
  const [open, setOpen] = useState(false);

  const handleToggleMenu = () => {
    setOpen((opened) => !opened);
  };

  return (
    <>
      <Transition mounted={open} transition="slide-left" timingFunction="ease">
        {(styles) => (
          <Flex style={{ ...styles }}>
            <Anchor size="lg" className={classes.link}>
              Menu
            </Anchor>
          </Flex>
        )}
      </Transition>
      <Burger onClick={handleToggleMenu} opened={open} color={theme.colors.gray[4]} size="lg" />
    </>
  );
};

export default Menu;
