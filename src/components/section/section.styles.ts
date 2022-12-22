import { createStyles, MantineTheme } from '@mantine/core';

export const useStyles = createStyles(
  (
    theme: MantineTheme,
    params: {
      first?: boolean;
    }
  ) => ({
    section: {
      marginTop: params && params.first === true ? '8rem' : '3rem',
      marginBottom: '5rem',
    },
  })
);
