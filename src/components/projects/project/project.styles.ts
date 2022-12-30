import { createStyles, MantineTheme } from '@mantine/core';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const useStyles = createStyles((theme: MantineTheme) => ({
  project: {
    width: '300px',
    height: '600px',
    marginTop: '5rem',

    cursor: 'pointer',
  },
  secondaryImages: {
    display: 'grid',
    // 2x2 grid
    gridTemplateColumns: 'repeat(2, 1fr)',
    gridTemplateRows: 'repeat(2, 1fr)',
    // 2px gap
    gap: '2rem',

    position: 'absolute',
    bottom: '4rem',
    left: '2rem',
  },
  title: {
    marginTop: '2rem',
    position: 'absolute',
    top: '250px',
  },
}));
