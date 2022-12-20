import { Flex } from '@mantine/core';
import Section from 'components/section/section.component';
import Image from 'next/image';
import { useStyles } from './hero.styles';
import Title from './title/title.component';

interface HeroProps {}

const Hero: React.FC<HeroProps> = () => {
  const { classes } = useStyles();

  return (
    <Section first>
      <Flex
        direction="column"
        align="center"
        style={{
          height: '100vh',
        }}
      >
        <Image
          className={classes.backgroundImage}
          src="/hero.jpg"
          alt="Futuristic car"
          width={2238}
          height={1340}
        />
        <Title />
      </Flex>
    </Section>
  );
};

export default Hero;
