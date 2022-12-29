import { createStyles, MantineTheme } from '@mantine/core';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const useStyles = createStyles((theme: MantineTheme) => ({
  oem: {
    '@media (max-width: 1200px)': {
      display: 'flex',
      gap: '4rem',
      justifyContent: 'center',
      alignItems: 'center',
    },
  },
  firstRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '2rem',

    '@media (max-width: 1200px)': {
      flexDirection: 'column',
      gap: '2rem',
    },
  },
  secondRow: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: '2rem',
    '@media (max-width: 1200px)': {
      flexDirection: 'column',
      gap: '2rem',
    },
  },
}));
