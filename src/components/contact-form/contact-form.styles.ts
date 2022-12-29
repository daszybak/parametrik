import { createStyles, MantineTheme } from '@mantine/core';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const useStyles = createStyles((theme: MantineTheme) => ({
  textInput: {},
  label: {},
  formContainer: {
    textTransform: 'uppercase',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gridTemplateRows: 'repeat(4, 83px)',
    rowGap: '2rem',
    gridAutoFlow: 'column',
    columnGap: '2rem',
    margin: '0 auto',

    alignItems: 'start',

    '@media (max-width: 1000px)': {
      margin: 0,
      gridTemplateColumns: '1fr',
      gridTemplateRows: 'unset',
    },
  },
  gridItem: {
    gridColumn: '1 / 2',
  },
  gridItem4: {
    gridColumn: '2 / 3',
    height: '100%',

    '@media (max-width: 1000px)': {
      gridColumn: '1 / 2',
      gridRow: 'unset',
    },
  },
  gridItem5: {
    gridColumn: '2 / 3',

    '@media (max-width: 1000px)': {
      gridColumn: '1 / 2',
      gridRow: 'unset',
    },
  },
  gridItem6: {
    gridColumn: '1 / 3',
    gridRow: '4 / 5',

    '@media (max-width: 1000px)': {
      gridColumn: '1 / 2',
      gridRow: 'unset',
    },
  },
}));
