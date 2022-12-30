import { createStyles, MantineTheme } from '@mantine/core';

export const useStyles = createStyles((theme: MantineTheme) => ({
  link: {
    fontSize: theme.fontSizes.xl,
    color: theme.colors.blue[4],
    textDecoration: 'none',
    transition: 'color 0.2s ease',
    '&:hover': {
      color: theme.colors.blue[5],
      textDecoration: 'underline',
    },
    textTransform: 'uppercase',
  },
}));
