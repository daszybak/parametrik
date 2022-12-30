import { createStyles, MantineTheme } from '@mantine/core';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const useStyles = createStyles((theme: MantineTheme) => ({
  logo: {
    width: '318px',
    height: '100px',
    position: 'relative',

    '@media (max-width: 900px)': {
      width: '190px',
      height: '60px',
    },
  },
}));
