import { createStyles, MantineTheme } from '@mantine/core';

export const useStyles = createStyles((theme: MantineTheme) => ({
  title: {
    position: 'relative',
    // backgroundColor: theme.colors.gray[0],
    // border: `1px solid ${theme.colors.gray[3]}`,
    backgroundColor: theme.colors.blue[4],
    border: `1px solid ${theme.colors.blue[7]}`,
    padding: theme.spacing.md,
    borderRadius: theme.radius.md,
    textDecoration: 'none',
    marginBottom: '5rem',
    color: theme.white,

    //hover
    '&:hover': {
      backgroundColor: theme.colors.blue[5],
    },
  },
}));
