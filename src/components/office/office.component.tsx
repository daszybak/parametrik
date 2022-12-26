import { Flex, Text, Title } from '@mantine/core';
import { ImageProps } from 'next/image';
import { useTranslation } from 'react-i18next';
import ImageGallery from '../image-gallery/image-gallery.component';
import SectionTitle from '../section-title/section-title.component';
import Section from '../section/section.component';
import Oems from './oems/oems.component';
import { useStyles } from './office.styles';

const IMAGE_PROPS: Partial<ImageProps> & {
  alt: string;
} = {
  width: 200,
  // 200 / 4/3 = 150
  height: 150,
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
          '@media (max-width: 1440px)': {
            flexDirection: 'column',
          },
          marginBottom: '3rem',
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
          // rows={3}
          style={{
            width: '700px',
          }}
          images={[
            {
              src: '/office/IMG_9075.jpg',
              ...IMAGE_PROPS,
            },
            {
              src: '/office/IMG_9082.jpg',
              ...IMAGE_PROPS,
            },
            {
              src: '/office/IMG_9083.jpg',
              ...IMAGE_PROPS,
            },
            {
              src: '/office/IMG_9087_2.jpg',
              ...IMAGE_PROPS,
            },
            {
              src: '/office/IMG_9090.jpg',
              ...IMAGE_PROPS,
            },
            {
              src: '/office/IMG_9075.jpg',
              ...IMAGE_PROPS,
            },
            {
              src: '/office/IMG_9091.jpg',
              ...IMAGE_PROPS,
            },
          ]}
        />
      </Flex>
      <Title
        order={3}
        weight="bold"
        style={{
          marginBottom: '3rem',
        }}
        className={classes.oemText}
      >
        {t<string>('home:about-us.text5')}
      </Title>
      <Oems />
    </Section>
  );
};

export default Office;
