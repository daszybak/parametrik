import { Burger, Flex, Transition } from '@mantine/core';
import { useState } from 'react';
import { useStyles } from './menu.styles';

interface MenuProps {}

const Menu: React.FC<MenuProps> = () => {
  const { theme } = useStyles();
  const [open, setOpen] = useState(false);

  const handleToggleMenu = () => {
    setOpen((opened) => !opened);
  };

  return (
    <>
      <Transition mounted={open} transition="slide-left" timingFunction="ease">
        {(styles) => <Flex style={{ ...styles }}>Menu</Flex>}
      </Transition>
      <Burger onClick={handleToggleMenu} opened={open} color={theme.colors.blue[4]} />
    </>
  );
};

export default Menu;
