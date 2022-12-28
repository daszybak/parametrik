import { createStyles, MantineTheme } from '@mantine/core';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const useStyles = createStyles((theme: MantineTheme) => ({
  link: {
    textDecoration: 'none',
    color: theme.colors.green[8],
    letterSpacing: '0.04em',

    //transition
    transition: 'all 0.2s ease-in-out',
    textTransform: 'uppercase',
    fontSize: theme.fontSizes.lg,
    userSelect: 'none',

    //hover
    '&:hover': {
      color: theme.colors.green[9],
      transform: 'translateY(-2px)',
      textDecoration: 'none',
    },

    //hover active link visited no underline
    '&:visited': {
      textDecoration: 'none',
    },
    '&:active': {
      textDecoration: 'none',
    },
  },
}));
