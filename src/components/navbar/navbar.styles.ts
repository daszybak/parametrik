import { createStyles, keyframes, MantineTheme } from '@mantine/core';

export const shine = keyframes({
  '0%': {
    backgroundPosition: '100% 100%',
  },
  '50%': {
    backgroundPosition: '0 0',
  },
  '100%': {
    backgroundPosition: '100% 100%',
  },
});

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const useStyles = createStyles((theme: MantineTheme) => ({
  navbar: {
    // backgroundColor: theme.colors.gold,
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 100,
    backgroundColor: theme.colors.blue[4],
    // add cool blur
    opacity: 0.95,
    // animation: `${shine} infinite 6s linear`,
    // backgroundRepeat: 'no-repeat',
    // // background: `linear-gradient(
    // //     to bottom right,
    // //     transparent 30%,
    // //     #a8a9ad 50%,
    // //     transparent 70%
    // //   )`,
    // backgroundSize: '400% 400%',
  },
}));

export default useStyles;
