import Image from 'next/image';
import { Card, CardProps, Title } from '@mantine/core';
import { useNextSanityImage } from 'next-sanity-image';
import { Project } from 'src/sanity-types';
import { useRouter } from 'next/router';
import { client } from 'src/sanity';
import ImagePlaceholder from '../image-placeholder/image-placeholder.component';
import { useStyles } from './project.styles';

interface ProjectProps extends Omit<CardProps, 'children'>, React.ComponentPropsWithRef<'div'> {
  project: Project;
}

const Project: React.FC<ProjectProps> = ({ project, className, ...other }) => {
  const { classes, cx } = useStyles();
  const locale = useRouter().locale as 'en' | 'de';
  const { title, images } = project;
  const firstImage = useNextSanityImage(client, images?.[0] ?? '');
  const secondaryImages = images?.slice(1, 5).map((image) => useNextSanityImage(client, image));

  return (
    <Card radius={32} withBorder className={cx(classes.project, className)} {...other}>
      <Card.Section>
        {firstImage !== null ? (
          <Image
            {...firstImage}
            alt={title?.[locale!] ?? 'Title'}
            style={{ width: '100%', height: 'auto' }} // layout="responsive" prior to Next 13.0.0
            width={400}
            height={300}
          />
        ) : (
          <ImagePlaceholder />
        )}
      </Card.Section>

      <Title order={4} className={classes.title}>
        {title?.[locale!] ?? 'Title'}
      </Title>
      <div className={classes.secondaryImages}>
        {secondaryImages?.map((image, index) => (
          <Image key={index} {...image} alt={title?.[locale!] ?? 'Title'} width={100} height={75} />
        ))}
      </div>
    </Card>
  );
};

export default Project;
