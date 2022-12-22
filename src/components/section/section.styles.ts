import { createStyles, MantineTheme } from '@mantine/core';

export const useStyles = createStyles(
  (
    theme: MantineTheme,
    params: {
      first?: boolean;
    }
  ) => ({
    section: {
      marginTop: params && params.first === true ? '8rem' : '0',
      marginBottom: params && params.first === true ? '0' : '5rem',
      height: '100%',
    },
    sectionHeight: {
      minHeight: '100vh',
    },
  })
);
