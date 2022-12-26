import { createStyles, MantineTheme } from '@mantine/core';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const useStyles = createStyles((theme: MantineTheme) => ({
  textInput: {},
  label: {},
  formContainer: {
    textTransform: 'uppercase',
    display: 'grid',
    gridTemplateColumns: 'auto auto',
    gridTemplateRows: 'repeat(4, 83px)',
    rowGap: '2rem',
    gridAutoFlow: 'column',
    columnGap: '2rem',
    margin: '0 auto',

    alignItems: 'end',

    '@media (max-width: 768px)': {
      margin: 0,
      gridTemplateColumns: 'auto',
    },
  },
  gridRow1: {
    gridRow: '1 / 2',
  },
  gridRow4: {
    gridRow: '4 / 5',
  },
}));
