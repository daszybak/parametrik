import { Flex } from '@mantine/core';
import Image from 'next/image';
import Section from '../section/section.component';
import { useStyles } from './hero.styles';
import Title from './title/title.component';

interface HeroProps {}

const Hero: React.FC<HeroProps> = () => {
  const { classes } = useStyles();

  return (
    <Section id="Hero" first>
      <Flex direction="column" align="center">
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
