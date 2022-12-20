import { createStyles, MantineTheme } from '@mantine/core';

export const useStyles = createStyles((theme: MantineTheme) => ({
  title: {
    position: 'relative',

    '&::after': {
      display: 'block',
      content: '""',
      position: 'absolute',
      bottom: 0,
      left: 0,
      height: '100%',
      width: '100%',
      zIndex: -1,
      opacity: 0.7,
      transform: 'scale(1.05, 1.07) skewX(-15deg)',
      backgroundColor: theme.colors.gray[5],
      backgroundBlendMode: 'multiply',
    },
  },
}));
