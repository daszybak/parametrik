import Image from 'next/image';
import { Card, Title } from '@mantine/core';
import { useNextSanityImage } from 'next-sanity-image';
import { Project } from 'src/sanity-types';
import { useRouter } from 'next/router';
import { client } from 'src/sanity';
import ImagePlaceholder from '../image-placeholder/image-placeholder.component';

interface ProjectProps {
  project: Project;
}

const Project: React.FC<ProjectProps> = ({ project }) => {
  const locale = useRouter().locale as 'en' | 'de';
  const { title, images } = project;
  const firstImage = useNextSanityImage(client, images?.[0] ?? '');

  return (
    <Card
      shadow="sm"
      p="lg"
      radius="md"
      withBorder
      style={{
        width: '400px',
        height: '300px',
      }}
    >
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
      <Title order={3}>{title?.[locale!] ?? 'Title'}</Title>
    </Card>
  );
};

export default Project;
