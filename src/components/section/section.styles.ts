import { createStyles, MantineTheme } from '@mantine/core';

export const useStyles = createStyles(
  (
    theme: MantineTheme,
    params: {
      first?: boolean;
      last?: boolean;
    }
  ) => ({
    section: {
      marginTop: '8rem',
      marginBottom: params && params.last === true ? '0' : '8rem',
      height: '100%',
    },
    sectionHeight: {
      minHeight: '100vh',
    },
  })
);
