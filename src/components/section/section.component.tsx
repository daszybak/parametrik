import { Container, Transition } from '@mantine/core';
import { useIntersection, useIsomorphicEffect } from '@mantine/hooks';
import { useState } from 'react';
import { useStyles } from './section.styles';

interface SectionProps {
  children: React.ReactNode;
  first?: boolean;
}

const Section: React.FC<SectionProps> = ({ children, first }) => {
  const { classes } = useStyles({
    first,
  });
  const { ref, entry } = useIntersection({
    rootMargin: '-50px',
    threshold: 0,
    root: null,
  });
  const interesecting = entry?.isIntersecting;
  const [interesected, setIntersected] = useState<boolean>(false);
  useIsomorphicEffect(() => {
    if (interesected) return;
    setIntersected(interesecting);
  }, [interesecting]);

  return (
    <>
      <div ref={ref} />
      <Transition transition="fade" mounted={first ? true : interesected}>
        {(styles) => (
          <Container fluid className={classes.section} style={{ ...styles }}>
            {children}
          </Container>
        )}
      </Transition>
    </>
  );
};

export default Section;
