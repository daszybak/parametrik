import { createStyles, MantineTheme } from '@mantine/core';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const useStyles = createStyles((theme: MantineTheme) => ({
  project: {
    width: '300px',
    height: '500px',
    marginTop: '5rem',

    cursor: 'pointer',

    background:
      'linear-gradient(90deg, rgba(169,169,169,1) 0%, rgba(192,192,192,1) 50%, rgba(169,169,169,1) 100%)',
    borderRadius: '1rem',
    boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)',
    position: 'relative',
    overflow: 'hidden',
    transition: 'all 0.3s ease-in-out',

    '&:hover': {
      transform: 'scale(1.05)',
      boxShadow: '0 10px 25px rgba(0, 0, 0, 0.2)',
    },
  },
  secondaryImages: {
    display: 'grid',
    // 2x2 grid
    gridTemplateColumns: 'repeat(2, 1fr)',
    gridTemplateRows: 'repeat(2, 1fr)',
    // 2px gap
    gap: '1rem',

    justifyContent: 'center',
  },
  title: {
    marginTop: '2rem',
    marginBottom: '1rem',
    top: '250px',
    textAlign: 'center',
  },
}));
