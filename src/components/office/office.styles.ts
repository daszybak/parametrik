import { createStyles, MantineTheme } from '@mantine/core';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const useStyles = createStyles((theme: MantineTheme) => ({
  oemText: {
    position: 'relative',
    '&::after': {
      content: '""',
      // highlight backround with red color and slightly tilted
      background: theme.colors.gray[7],
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
}));
