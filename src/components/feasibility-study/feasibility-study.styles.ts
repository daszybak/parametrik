import { createStyles, MantineTheme } from '@mantine/core';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const useStyles = createStyles((theme: MantineTheme) => ({
  marginB3: { marginBottom: '3rem' },
  marginB2: { marginBottom: '2rem' },
  arrow: {
    position: 'absolute',
    right: 0,
    top: '50%',
    transform: 'translate(0, -50%)',
    fontSize: '2rem',
  },
  arrow2: {
    top: '80%',
    transform: 'rotate(180deg)',
  },
  itemTitle: {
    marginBottom: '1rem',
    // backgroundColor: theme.colors.gray[2],
    // border: `1px solid ${theme.colors.gray[4]}`,
    backgroundColor: theme.colors.blue[5],
    border: `1px solid ${theme.colors.blue[7]}`,
    color: theme.white,
    textAlign: 'center',
    borderRadius: theme.radius.sm,
  },
}));
