import { createStyles, MantineTheme } from '@mantine/core';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const useStyles = createStyles((theme: MantineTheme) => ({
  link: {
    textDecoration: 'none',
    color: theme.colors.gray[0],

    //transition
    transition: 'all 0.2s ease-in-out',

    //hover
    '&:hover': {
      color: theme.colors.gray[2],
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
