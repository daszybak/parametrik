import { createStyles, MantineTheme } from '@mantine/core';

export const useStyles = createStyles((theme: MantineTheme) => ({
  title: {
    color: theme.white,
    userSelect: 'none',
    WebkitUserSelect: 'none',
    display: 'inline-block',
    position: 'relative',
    zIndex: 10,

    h1: {
      textShadow: '0px 4px 2px rgba(255, 255, 255, 0.5), 2px 2px 2px rgba(255, 255, 255, 0.5)',
      color: theme.colors.green[4],
      letterSpacing: '0.1em',
    },

    p: {
      textShadow: '0px 1px 1px rgba(255, 255, 255, 0.5), 1px 1px 1px rgba(255, 255, 255, 0.5)',
      color: theme.colors.green[4],
      letterSpacing: '0.1em',
    },
  },
  gridItem: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    visibility: 'visible',
    whiteSpace: 'nowrap',
  },
  invisible: {
    visibility: 'hidden',
  },
}));
