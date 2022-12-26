import { createStyles, MantineTheme } from '@mantine/core';

// interface ImageGalleryParams {
//   rows?: number;
// }

export const useStyles = createStyles((theme: MantineTheme /*, params: ImageGalleryParams*/) => ({
  gallery: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '1rem',
    margin: '2rem 0',
    flexGrow: 0,
    flexShrink: 0,
  },
  thumb: {
    position: 'relative',
  },
  image: {
    transition: 'all 0.3s ease',
    '&:hover': {
      transform: 'scale(1.05)',
    },
  },
  caption: {
    position: 'absolute',
    bottom: '0',
    left: 0,
    padding: '10px 5px 5px',
    width: '100%',
    color: theme.white,
    opacity: 0,
    background: 'linear-gradient(0deg, rgba(0, 0, 0, .5) 0%, rgba(255, 255 ,255 , 0) 100%)',
    transition: '.3s',
  },
}));
