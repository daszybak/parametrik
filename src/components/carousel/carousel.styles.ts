import { createStyles, MantineTheme } from '@mantine/core';
// eslint-disable-next-line import/no-cycle
import { GALLERY_IMAGE } from './carousel.component';

export const useStyles = createStyles((theme: MantineTheme) => ({
  flexContainer: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '2rem',
    flexDirection: 'row',
    padding: '0',
    position: 'relative',
  },
  summaryContainer: {
    margin: 0,
    padding: '3rem 1rem',

    boxShadow: theme.shadows.sm,

    display: 'flex',
    justifyContent: 'space-between',
    button: {
      width: '200px',
    },
    maxWidth: `${GALLERY_IMAGE.SLIDE_WIDTH}`,
    backgroundColor: theme.colors.dark[0],
    height: `calc(${GALLERY_IMAGE.SLIDE_HEIGHT} + ${GALLERY_IMAGE.THUMB_HEIGHT} + 6px)`,
    minWidth: '500px',
  },
  specificationsGrid: {
    margin: 0,
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    columnGap: '5rem',
  },
  specField: {
    borderBottom: `1px solid ${theme.colors.dark[2]}`,
    padding: '1rem',
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'space-between',
  },
  embla: {
    position: 'relative',
    maxWidth: `${300}px`,
    marginBottom: '1rem',
  },
  emblaViewport: {
    overflow: 'hidden',
    width: '100%',
  },
  isDraggable: {
    cursor: 'grab',
  },
  isDragging: {
    cursor: 'grabbing',
  },
  portal: {
    position: 'fixed',
    zIndex: 25000,
    top: '0',
    left: '0',
    right: 0,
    bottom: 0,

    height: '100vh',
  },
  modal: {
    backgroundColor: 'rgba(0,0,0, 0.6)',
    backdropFilter: 'blur(5px)',
  },
  modalBody: {
    padding: 0,
    height: '100%',
  },
  emblaContainer: {
    display: 'flex',
    userSelect: 'none',
    WebkitTouchCallout: 'none',
    WebkitTapHighlightColor: 'transparent',
  },
  slide: {
    position: 'relative',
    minWidth: '100%',
    cursor: 'grab',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  slideInner: {
    position: 'relative',
    overflow: 'hidden',
  },
  slideThumb: {
    opacity: 0.2,
    transition: 'opacity 0.2s',
    cursor: 'pointer',
  },
  fixed: {},
  slideThumbInner: {
    touchAction: 'manipulation',
    cursor: 'pointer',
    backgroundColor: 'transparent',
    position: 'relative',
    display: 'block',
    overflow: 'hidden',
  },
  controls: {
    position: 'absolute',
    zIndex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    top: '50%',
    width: '100%',
    padding: '0 0.25rem',

    pointerEvents: 'none',
  },
  control: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    pointerEvents: 'all',
    backgroundColor: theme.white,
    color: theme.black,
    boxShadow: theme.shadows.md,
    border: `1px solid ${theme.colors.gray[3]}`,
    ...theme.fn.hover({ opacity: 1 }),
    '&:active': theme.activeStyles,
    borderRadius: '50%',
    padding: '0.25rem',
    opacity: 0.65,
    height: 30,
    width: 30,
    svg: {
      height: 20,
      width: 20,
    },
  },
  translateY2: {
    transform: 'translateY(2px)',
  },
  fullscreen: {
    position: 'absolute',
    zIndex: 1,
    left: '0.25rem',
    // top: '0.25rem',
    top: '6rem',
  },
  close: {
    position: 'absolute',
    zIndex: 1,
    right: '0.25rem',
    top: '0.25rem',
  },
  selected: {
    opacity: 1,
  },
  imagePlaceholder: {},
  paddingL05: {
    paddingLeft: '0.5rem',
  },
  keyFeatureContainer: {
    width: `${GALLERY_IMAGE.THUMB_WIDTH}px`,
    backgroundColor: theme.colors.dark[0],
    padding: '1rem 0',
    boxShadow: theme.shadows.sm,
  },
  alignItemsStretch: {
    alignItems: 'stretch',
  },
  sellerContainer: {
    backgroundColor: theme.colors.dark[0],
    padding: '3rem 0',
    marginBottom: '6rem',

    boxShadow: theme.shadows.xs,
  },
  gap05: {
    gap: '0.5rem',
  },
  gap1: {
    gap: '1rem',
  },
  gap0: {
    gap: 0,
  },
  flexAlignCenter: {
    display: 'flex',
    alignItems: 'center',
  },
  justifySpaceBet: {
    justifyContent: 'space-between',
  },
  justifyEnd: {
    justifyContent: 'flex-end',
  },
  adLinks: {
    margin: 0,
  },
  justifyCenter: {
    justifyContent: 'center',
  },
  marginT1: {
    marginTop: '1rem',
  },
  icon: {
    path: {
      fill: 'black',
    },
    svg: {
      transform: 'translateY(2px)',
    },
  },
  summaryGroupedInfoContainer: {
    display: 'flex',
    gap: '1rem',
  },
  margin0: {
    margin: 0,
  },
  adSummaryTitle: {
    textTransform: 'none',
  },
  flexDirectionColumn: {
    flexDirection: 'column',
  },
  marginB1: {
    marginBottom: '1rem',
  },
  marginT3: {
    marginTop: '3rem',
  },
  sellerContactInfo: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
}));
