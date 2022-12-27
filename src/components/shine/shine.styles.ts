import { createStyles, keyframes, MantineTheme } from '@mantine/core';

export const shine = keyframes({
  '0%': {
    backgroundPosition: '0% 0%',
  },
  '50%': {
    backgroundPosition: '100% 100%',
  },
  '100%': {
    backgroundPosition: '0% 0%',
  },
});

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const useStyles = createStyles((theme: MantineTheme) => ({
  shine: {
    animation: `${shine} infinite 15s linear`,
    backgroundRepeat: 'no-repeat',
    background: `linear-gradient(
        to bottom right,
        transparent 40%,
        #a8a9ad 50%,
        transparent 60%
      )`,
    backgroundSize: '200% 200%',
    zIndex: -10,
  },
}));
