import Image, { ImageProps } from 'next/image';
import { useCallback, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { AiOutlineLeft, AiOutlineRight, AiOutlineClose, AiOutlineExpand } from 'react-icons/ai';
import { Modal, UnstyledButton } from '@mantine/core';
import { useIsomorphicEffect, useScrollLock } from '@mantine/hooks';
// eslint-disable-next-line import/no-cycle
import { useStyles } from './carousel.styles';

export enum GALLERY_IMAGE {
  SLIDE_WIDTH = '666',
  SLIDE_HEIGHT = '500',
  THUMB_WIDTH = '100',
  THUMB_HEIGHT = '75',
}

interface CarouselProps {
  images: (ImageProps & { alt: string })[];
  startIndex?: number;
  modalGallery?: boolean;
  handleFullScreenOnOpen: () => void;
  handleFullScreenOnClose: () => void;
}

export const Carousel: React.FC<CarouselProps> = ({
  images,
  handleFullScreenOnOpen,
  handleFullScreenOnClose,
  startIndex = 0,
  modalGallery = false,
}) => {
  const { classes, cx } = useStyles();
  const [mainViewportRef, emblaSlides] = useEmblaCarousel({ skipSnaps: false, startIndex });
  const [, /*thumbViewportRef*/ emblaThumbs] = useEmblaCarousel({
    containScroll: 'keepSnaps',
    dragFree: true,
  });
  const [, /*slide*/ setSlide] = useState<number>(0);
  const [slidesIsDragging, setSlidesIsDragging] = useState<boolean>(false);

  // const handleThumbOnClick = useCallback(
  //   (index: number) => {
  //     if (!emblaSlides || !emblaThumbs) return;
  //     if (emblaThumbs.clickAllowed()) emblaSlides.scrollTo(index);
  //   },
  //   [emblaSlides, emblaThumbs]
  // );

  const handleOnSelect = useCallback(() => {
    if (!emblaSlides || !emblaThumbs) return;
    setSlide(emblaSlides.selectedScrollSnap());
    emblaThumbs.scrollTo(emblaSlides.selectedScrollSnap());
  }, [emblaSlides, emblaThumbs, setSlide]);

  const handlePointerDown = () => {
    setSlidesIsDragging(true);
  };

  const handlePointerUp = () => {
    setSlidesIsDragging(false);
  };

  useIsomorphicEffect(() => {
    if (!emblaSlides) return;
    handleOnSelect();
    emblaSlides.on('select', handleOnSelect);
    emblaSlides.on('pointerDown', handlePointerDown);
    emblaSlides.on('pointerUp', handlePointerUp);
  }, [emblaSlides, handleOnSelect]);

  const handleSlideOnClick = useCallback(
    (offset: number) => {
      if (!emblaSlides /*|| !emblaThumbs*/) return;
      offset === 1 ? emblaSlides.scrollNext() : offset === -1 ? emblaSlides.scrollPrev() : null;
    },
    [emblaSlides, emblaThumbs]
  );

  const renderedSlides = images?.map((image, i) => (
    <div
      key={image.alt + i}
      className={classes.slide}
      style={{
        cursor: slidesIsDragging ? 'grabbing' : 'grab',
      }}
    >
      <div className={classes.slideInner}>
        <Image
          src={image.src}
          alt={image.alt}
          //@ts-ignore
          width={image.width * 2}
          //@ts-ignore
          height={image.height * 2}
          priority
        />
      </div>
    </div>
  ));

  // const renderedThumbs = images.map((image, i) => (
  //   // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
  //   <div
  //     key={image.alt + i}
  //     onClick={handleOnSelect}
  //     className={cx(classes.slideThumb, {
  //       [classes.selected]: slide === i,
  //       [classes.paddingL05]: i !== 0,
  //     })}
  //   >
  //     <Image
  //       onClick={() => handleThumbOnClick(i)}
  //       src={image.src}
  //       alt={image.alt}
  //       width={GALLERY_IMAGE.THUMB_WIDTH}
  //       height={GALLERY_IMAGE.THUMB_HEIGHT}
  //     />
  //   </div>
  // ));

  return (
    <div>
      <div className={cx(classes.embla)}>
        <div className={classes.emblaViewport} ref={mainViewportRef}>
          <div className={classes.emblaContainer}>{renderedSlides}</div>
          <div className={classes.controls}>
            <UnstyledButton
              onClick={() => handleSlideOnClick(-1)}
              className={classes.control}
              style={{
                ...(emblaSlides?.canScrollPrev() ? {} : { opacity: 0 }),
              }}
            >
              <AiOutlineLeft />
            </UnstyledButton>
            <UnstyledButton
              onClick={() => handleSlideOnClick(1)}
              className={classes.control}
              style={{
                ...(emblaSlides?.canScrollNext() ? {} : { opacity: 0 }),
              }}
            >
              <AiOutlineRight />
            </UnstyledButton>
          </div>
          {modalGallery ? (
            <div className={cx(classes.close, classes.control)}>
              <UnstyledButton onClick={handleFullScreenOnClose}>
                <AiOutlineClose className={classes.translateY2} />
              </UnstyledButton>
            </div>
          ) : (
            <div className={cx(classes.fullscreen, classes.control)}>
              <UnstyledButton onClick={handleFullScreenOnOpen}>
                <AiOutlineExpand className={classes.translateY2} />
              </UnstyledButton>
            </div>
          )}
        </div>
      </div>

      {/* <div className={cx(classes.embla)}>
        <div className={classes.emblaViewport} ref={thumbViewportRef}>
          <div className={classes.emblaContainer}>{renderedThumbs}</div>
        </div>
      </div> */}
    </div>
  );
};

const CarouselWrapper: React.FC<{
  images: (ImageProps & { alt: string })[];
}> = ({ images }) => {
  const { classes } = useStyles();
  const fullscreenState = useState<boolean>(false);
  const [fullscreen, setFullscreen] = fullscreenState;
  const [, setScrollLocked] = useScrollLock();

  const handleFullScreenOnClose = () => {
    setFullscreen(false);
    setScrollLocked(false);
  };

  const handleFullScreenOnOpen = () => {
    setFullscreen(true);
    setScrollLocked(true);
  };

  return (
    <>
      <Carousel
        images={images}
        modalGallery={false}
        handleFullScreenOnOpen={handleFullScreenOnOpen}
        handleFullScreenOnClose={handleFullScreenOnClose}
      />
      {fullscreen && (
        <Modal
          centered
          size={GALLERY_IMAGE.SLIDE_WIDTH}
          zIndex={12000}
          onClose={handleFullScreenOnClose}
          opened={fullscreen}
          withCloseButton={false}
          classNames={{
            modal: classes.modal,
            // body: cx(classes.flexAlignCenter, classes.justifyCenter, classes.modalBody),
          }}
        >
          <Carousel
            images={images}
            handleFullScreenOnOpen={handleFullScreenOnOpen}
            handleFullScreenOnClose={handleFullScreenOnClose}
          />
        </Modal>
      )}
    </>
  );
};
export default CarouselWrapper;
