import { createStyles, MantineTheme } from '@mantine/core';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const useStyles = createStyles((theme: MantineTheme) => ({
  hero: {
    position: 'relative',
  },
  backgroundImage: {
    //fill
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    objectPosition: 'center',
    zIndex: 0,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
  title: {
    color: theme.white,
  },
  marginB3: {
    '@media (max-width: 900px)': {
      marginTop: '3rem',
    },
  },
}));
