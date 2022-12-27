import { createStyles, MantineTheme } from '@mantine/core';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const useStyles = createStyles((theme: MantineTheme) => ({
  playerWrapper: {
    position: 'relative',
    // //paddingTop 100 / (800 / 600) = 75%
    // paddingTop: '75%',
    width: '600px',
    height: '600px',
  },
  reactPlayer: {
    position: 'absolute',
    top: 0,
    left: 0,
    boxShadow: theme.shadows.lg,
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
    backgroundColor: theme.colors.gray[2],
    border: `1px solid ${theme.colors.gray[4]}`,
    textAlign: 'center',
    borderRadius: theme.radius.sm,
    width: '100%',
  },
  arrow: {
    position: 'absolute',
    right: '5%',
    bottom: '2%',
    fontSize: '2rem',
  },
}));
