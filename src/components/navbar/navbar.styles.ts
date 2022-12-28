import { createStyles, MantineTheme } from '@mantine/core';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const useStyles = createStyles((theme: MantineTheme) => ({
  navbar: {
    // backgroundColor: theme.colors.gold,
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 100,
    // backgroundColor: theme.colors.blue[4],
    backgroundColor: 'transparent',
    // add cool blur
    opacity: 0.95,
    height: 100,
  },
}));

export default useStyles;
