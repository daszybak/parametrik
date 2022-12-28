import { Flex } from '@mantine/core';
import Image from 'next/image';
import { useContext } from 'react';
import { HeroContext } from 'src/context/hero/heroContextProvider';
import { SectionWithoutTransition } from '../section/section.component';
import { useStyles } from './hero.styles';
import Title from './title/title.component';

interface HeroProps {}

const Hero: React.FC<HeroProps> = () => {
  const { heroRef } = useContext(HeroContext);
  const { classes } = useStyles();

  return (
    <SectionWithoutTransition id="Hero" first ref={heroRef}>
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
    </SectionWithoutTransition>
  );
};
Hero.displayName = 'Hero';

export default Hero;
