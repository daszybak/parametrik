import { createStyles, MantineTheme } from '@mantine/core';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const useStyles = createStyles((theme: MantineTheme) => ({
  footer: {
    paddingTop: '5rem',
    paddingBottom: '2rem',
    backgroundColor: theme.colors.gray[0],
    minHeight: '100vh',
  },
  marginB5: { marginBottom: '10rem' },
  contactForm: {
    marginBottom: '10rem',
    width: '80%',

    '@media (max-width: 768px)': {
      width: '100%',
    },
  },
}));
