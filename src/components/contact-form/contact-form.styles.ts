import { createStyles, MantineTheme } from '@mantine/core';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const useStyles = createStyles((theme: MantineTheme) => ({
  textInput: {},
  label: {},
  formContainer: {
    textTransform: 'uppercase',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gridTemplateRows: '1fr 1fr 1fr',
    rowGap: '2rem',
    gridAutoFlow: 'column',
  },
}));
