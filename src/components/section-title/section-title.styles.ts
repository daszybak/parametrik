import { createStyles, MantineTheme } from '@mantine/core';

export const useStyles = createStyles((theme: MantineTheme) => ({
  title: {
    position: 'relative',
    // backgroundColor: theme.colors.gray[0],
    // border: `1px solid ${theme.colors.gray[3]}`,
    background: theme.colors.green[4],
    border: `1px solid ${theme.colors.green[6]}`,
    padding: theme.spacing.md,
    borderRadius: theme.radius.md,
    textDecoration: 'none',
    marginBottom: '5rem',
    color: theme.white,

    //hover
    '&:hover': {
      backgroundColor: theme.colors.green[5],
    },
  },
}));
