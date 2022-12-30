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
      paddingTop: '8rem',
      paddingBottom: params && params.last === true ? '0' : '8rem',
      height: '100%',
    },
    sectionHeight: {
      minHeight: 'calc(100vh - 8rem)',
    },
    id: {
      transform: 'translateY(2rem)',
    },
  })
);
