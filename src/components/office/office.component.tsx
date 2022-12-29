import { Flex, Text, Title } from '@mantine/core';
import Image, { ImageProps } from 'next/image';
import { useTranslation } from 'react-i18next';
import SectionTitle from '../section-title/section-title.component';
import Section from '../section/section.component';
import Oems from './oems/oems.component';
import { useStyles } from './office.styles';

type ImageType = Partial<ImageProps> & {
  alt: string;
};

interface ImageGalleryProps extends React.ComponentPropsWithoutRef<'div'> {
  images: ImageType[];
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images, ...other }) => {
  const { classes } = useStyles();

  const renderedImages = images.map((image, index) =>
    image.src ? <Image {...image} src={image.src} key={index} /> : null
  );

  return (
    <div className={classes.grid} {...other}>
      {renderedImages}
    </div>
  );
};

const IMAGE_PROPS: ImageType = {
  alt: 'Parametrik Engineering Office',
  blurDataURL: '/office/IMG_9075.jpg',
  placeholder: 'blur',
};

interface OfficeProps {}

const Office: React.FC<OfficeProps> = () => {
  const { classes } = useStyles();
  const { t } = useTranslation();
  const name = 'Office';

  return (
    <Section id={name}>
      <SectionTitle align="start">{name}</SectionTitle>
      <Flex
        align="center"
        gap="2rem"
        justify="center"
        sx={{
          '@media (max-width: 1200px)': {
            flexDirection: 'column',
          },
          marginBottom: '10rem',
        }}
      >
        <Flex
          direction="column"
          align="center"
          style={{
            width: '700px',
          }}
          gap="2rem"
        >
          <Title order={3}>Josip Zavacki - CEO</Title>
          <Text
            style={{
              marginBottom: '1rem',
            }}
          >
            {t<string>('home:about-us.project-lead-con')}
          </Text>
          <Title order={3}>Leon Zavacki</Title>
          <Text>{t<string>('home:about-us.project-lead-sim')}</Text>
        </Flex>
        <ImageGallery
          images={[
            {
              src: '/office/IMG_9091.jpg',
              ...IMAGE_PROPS,
              width: 200,
              height: 150,
            },
            {
              src: '/office/IMG_9082.jpg',
              ...IMAGE_PROPS,
              width: 200,
              height: 150,
            },
            {
              src: '/office/IMG_9086.jpg',
              ...IMAGE_PROPS,
              height: 200,
              width: 150,
            },
            {
              src: '/office/IMG_9075.jpg',
              ...IMAGE_PROPS,
              width: 200,
              height: 150,
            },
            {
              src: '/office/IMG_9087_2.jpg',
              ...IMAGE_PROPS,
              width: 200,
              height: 100,
            },
            {
              src: '/office/IMG_9089.jpg',
              ...IMAGE_PROPS,
              width: 150,
              height: 200,
            },
          ]}
        />
      </Flex>
      <Title
        order={4}
        weight="bold"
        style={{
          marginBottom: '3rem',
        }}
        className={classes.oemText}
        transform="unset"
      >
        {t<string>('home:about-us.text5')}
      </Title>
      <Oems />
    </Section>
  );
};

export default Office;
