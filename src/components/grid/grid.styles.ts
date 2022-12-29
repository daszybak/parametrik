import { createStyles, MantineTheme } from '@mantine/core';

export const useStyles = createStyles((theme: MantineTheme) => ({
  grid: {
    display: 'grid',
    // 3 columns, 2 rows same size
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridTemplateRows: 'repeat(2, 1fr)',
    margin: '0 -1rem',

    // innher borders nth-type selector
    '& > *:nth-of-type(1)': {
      borderRight: `1px dashed ${theme.colors.blue[2]}`,
      borderBottom: `1px dashed ${theme.colors.blue[2]}`,
    },
    '& > *:nth-of-type(2)': {
      borderRight: `1px dashed ${theme.colors.blue[2]}`,
      borderBottom: `1px dashed ${theme.colors.blue[2]}`,
    },
    '& > *:nth-of-type(3)': {
      borderBottom: `1px dashed ${theme.colors.blue[2]}`,
    },
    '& > *:nth-of-type(4)': {
      borderRight: `1px dashed ${theme.colors.blue[2]}`,
    },
    '& > *:nth-of-type(5)': {
      borderRight: `1px dashed ${theme.colors.blue[2]}`,
    },
  },
  gridItem: {
    padding: '1rem',

    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
  },
}));
