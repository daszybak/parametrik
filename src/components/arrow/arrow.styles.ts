import { createStyles, MantineTheme } from '@mantine/core';

export const useStyles = createStyles((theme: MantineTheme) => ({
  arrow: {
    position: 'absolute',
    top: '22px',
    width: '20%',
    height: '10px',
    backgroundColor: theme.colors.gray[7],
    zIndex: 1,
    boxShadow: '0 3px 5px rgba(0, 0, 0, .2)',

    '&::before': {
      transform: 'rotate(45deg)',
      top: '-12px',
      content: '""',
      position: 'absolute',
      width: '60px',
      height: '10px',
      right: '-8px',
      backgroundColor: theme.colors.gray[7],
    },
    '&::after': {
      transform: 'rotate(-45deg)',
      top: '12px',
      boxShadow: '0 3px 5px rgba(0, 0, 0, .2)',
      content: '""',
      position: 'absolute',
      width: '60px',
      height: '10px',
      right: '-8px',
      backgroundColor: theme.colors.gray[7],
    },
  },
}));
