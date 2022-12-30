import { createStyles, MantineTheme } from '@mantine/core';

export const useStyles = createStyles((theme: MantineTheme) => ({
  grid: {
    display: 'grid',
    // 3 columns, 2 rows same size
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridTemplateRows: 'repeat(2, 1fr)',
    margin: '0 auto',

    '@media (max-width: 1500px)': {
      gridTemplateColumns: 'repeat(2, 1fr)',
      gridTemplateRows: 'repeat(3, 1fr)',
    },

    '@media (max-width: 1250px)': {
      gridTemplateColumns: '1fr',
      gridTemplateRows: 'repeat(6, auto)',
    },

    // innher borders nth-type selector
    '& > *:nth-of-type(1)': {
      borderRight: `1px dashed ${theme.colors.blue[2]}`,
      borderBottom: `1px dashed ${theme.colors.blue[2]}`,

      '@media (max-width: 1250px)': {
        border: 'none',
      },
    },
    '& > *:nth-of-type(2)': {
      borderRight: `1px dashed ${theme.colors.blue[2]}`,
      borderBottom: `1px dashed ${theme.colors.blue[2]}`,

      '@media (max-width: 1500px)': {
        borderRight: 'none',
      },

      '@media (max-width: 1250px)': {
        border: 'none',
      },
    },
    '& > *:nth-of-type(3)': {
      borderBottom: `1px dashed ${theme.colors.blue[2]}`,

      '@media (max-width: 1500px)': {
        borderRight: `1px dashed ${theme.colors.blue[2]}`,
        borderBottom: `1px dashed ${theme.colors.blue[2]}`,
      },

      '@media (max-width: 1250px)': {
        border: 'none',
      },
    },
    '& > *:nth-of-type(4)': {
      borderRight: `1px dashed ${theme.colors.blue[2]}`,

      '@media (max-width: 1500px)': {
        borderRight: 'none',
        borderBottom: `1px dashed ${theme.colors.blue[2]}`,
      },

      '@media (max-width: 1250px)': {
        border: 'none',
      },
    },
    '& > *:nth-of-type(5)': {
      borderRight: `1px dashed ${theme.colors.blue[2]}`,

      '@media (max-width: 1250px)': {
        border: 'none',
      },
    },
  },
  gridItem: {
    padding: '1rem',

    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
  },
}));
