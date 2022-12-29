import { createStyles, MantineTheme } from '@mantine/core';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const useStyles = createStyles((theme: MantineTheme) => ({
  playerWrapper: {
    position: 'relative',
    // //paddingTop 100 / (800 / 600) = 75%
    // paddingTop: '75%',
    width: '600px',
    height: '600px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  reactPlayer: {
    position: 'absolute',

    boxShadow: theme.shadows.lg,
  },
  image: {
    width: '200px',
    height: '160px',
    position: 'relative',

    '@media (max-width: 800px)': {
      width: '120px',
      height: '96px',
    },
  },
  bigImage: {
    width: '300px',
    height: '150px',
    position: 'relative',

    '@media (max-width: 800px)': {
      width: '150px',
      height: '75px',
    },
  },
  border: {
    border: `1px solid ${theme.colors.blue[2]}`,
    borderRadius: '50%',
    // small shadow bottom
    boxShadow: '1px 0 0 2px rgba(0, 0, 0, 0.05)',
  },
  grid: {
    display: 'grid',
    // 2 columns, 3 rows same size
    height: '100%',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gridTemplateRows: 'repeat(3, 1fr)',
    gridAutoFlow: 'column',
    rowGap: '1rem',
    columnGap: '5rem',
    justifyItems: 'center',
    justifyContent: 'center',

    '@media (max-width: 800px)': {
      columnGap: '1rem',
    },
  },
  gridItem: {
    overflow: 'hidden',
    width: '100%',

    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  gridItemTitle: {
    marginBottom: '1rem',
    backgroundColor: theme.colors.green[5],
    border: `1px solid ${theme.colors.green[7]}`,
    // backgroundColor: theme.colors.blue[5],
    // border: `1px solid ${theme.colors.blue[7]}`,
    textAlign: 'center',
    borderRadius: theme.radius.sm,
    width: '100%',
    color: theme.white,
  },
  arrow: {
    position: 'absolute',
    right: '5%',
    bottom: '2%',
    fontSize: '2rem',
    color: theme.colors.green[8],
  },
  flexContainer: {
    height: '100%',

    '@media (max-width: 1650px)': {
      flexDirection: 'column',
      gap: '5rem',
    },
  },

  text: {
    marginBottom: '3rem',
    width: '50%',
    '@media (max-width: 1650px)': {
      width: '100%',
    },
  },
}));
