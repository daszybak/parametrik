import { createStyles, MantineTheme } from '@mantine/core';

export const useStyles = createStyles((theme: MantineTheme) => ({
  title: {
    color: theme.white,

    h1: {
      textShadow: '2px 2px 1px rgba(255, 255, 255, 0.5), 1px 1px 2px rgba(255, 255, 255, 0.5)',
      color: theme.colors.gray[2],
    },

    p: {
      textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2), -2px -2px 4px rgba(255, 255, 255, 0.2)',
    },
  },
}));
