import Image, { ImageProps } from 'next/image';
import { useStyles } from './image-gallery.styles';

// const image = {
//     src: constructCDNAdImageUri(ad.files[0].path),
//     alt: ad.files[0].filename,
//     objectFit: 'contain',
//     layout: 'fill',
//     placeholder: 'blur',
//     blurDataURL: '/images/blur-car-card-image.png',
// };

interface ImageGalleryProps extends React.ComponentPropsWithoutRef<'div'> {
  images: ImageProps[];
  //   rows?: number;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images /*, rows */, className, ...other }) => {
  const { classes, cx } = useStyles(/*{ rows }*/);

  const renderedImages = images.map((image, i) => (
    <div key={i} className={classes.image}>
      <Image {...image} />
    </div>
  ));

  return (
    <div className={cx(classes.gallery, className)} {...other}>
      {renderedImages}
    </div>
  );
};

export default ImageGallery;
