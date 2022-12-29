import { createStyles, MantineTheme } from '@mantine/core';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const useStyles = createStyles((theme: MantineTheme) => ({
  oemText: {
    position: 'relative',
    textTransform: 'none',
    '&::after': {
      content: '""',
      // highlight backround with red color and slightly tilted
      background: theme.colors.green[4],
      // set the background to cover the entire element
      backgroundSize: '100% 100%',
      // set the background to repeat
      backgroundRepeat: 'repeat',
      // set the background to be fixed in place
      backgroundAttachment: 'fixed',
      // set the background to be behind the text
      position: 'absolute',
      // set the background to cover the entire element
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: -1,
      opacity: 0.2,
      transform: 'scale(1.05, 1.07) skewX(-15deg)',
    },
  },
  grid: {
    display: 'grid',
    //3 columns, 3 rows auto size
    gridTemplateColumns: 'repeat(3, 200px)',
    gridTemplateRows: 'repeat(3, auto)',
    gap: '1rem',

    '& > *:nth-of-type(1)': {
      gridRow: '1 / 3',
      gridColumn: '1',
      alignSelf: 'center',
    },
    '& > *:nth-of-type(2)': {
      gridRow: '1',
      gridColumn: '2 / 3',
    },
    '& > *:nth-of-type(3)': {
      gridRow: '2 / 3',
      gridColumn: '2 / 3',
    },
    '& > *:nth-of-type(4)': {
      gridRow: '2 / 3',
      gridColumn: '3 / 4',
      marginLeft: -50,
    },
    '& > *:nth-of-type(5)': {
      gridRow: '3',
      gridColumn: '1 / 3',
      justifySelf: 'center',
    },
    '& > *:nth-of-type(6)': {
      gridColumn: '3',
      gridRow: '3 / 4',
      justifySelf: 'start',
      marginLeft: -50,
      marginTop: -50,
    },

    '& > *': {
      transition: 'transform 0.2s ease-in-out',

      '&:hover': {
        transform: 'scale(1.05)',
      },
    },
  },
}));
