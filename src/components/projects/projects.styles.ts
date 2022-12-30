import { createStyles, MantineTheme } from '@mantine/core';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const useStyles = createStyles((theme: MantineTheme) => ({
  projects: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '5rem',
    marginTop: '-5rem',
  },
}));
