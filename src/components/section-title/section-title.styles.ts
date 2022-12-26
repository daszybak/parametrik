import { createStyles, MantineTheme } from '@mantine/core';

export const useStyles = createStyles((theme: MantineTheme) => ({
  title: {
    position: 'relative',
    backgroundColor: theme.colors.gray[0],
    padding: theme.spacing.md,
    borderRadius: theme.radius.md,
    border: `1px solid ${theme.colors.gray[3]}`,
    textDecoration: 'none',
    marginBottom: '5rem',

    //hover
    '&:hover': {
      backgroundColor: theme.colors.gray[2],
    },
  },
}));
