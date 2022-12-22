import { Container, Transition } from '@mantine/core';
import { useIntersection, useIsomorphicEffect } from '@mantine/hooks';
import { useState } from 'react';
import { useStyles } from './section.styles';

const TRANSITION_DURATION = 1000;

interface SectionProps {
  children: React.ReactNode;
  first?: boolean;
  id: string;
}

const Section: React.FC<SectionProps> = ({ children, id, first }) => {
  const { classes } = useStyles({
    first,
  });
  const { ref, entry } = useIntersection({
    rootMargin: '-150px',
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
      <div
        style={{
          transform: 'translateY(-2rem)',
        }}
        id={id}
      />
      <div key={id} ref={ref} className={classes.sectionHeight}>
        <Transition
          transition="fade"
          duration={first ? 0 : TRANSITION_DURATION}
          mounted={first ? true : interesected}
        >
          {(styles) => (
            <section>
              <Container fluid className={classes.section} style={styles} id={id} key={id}>
                {children}
              </Container>
            </section>
          )}
        </Transition>
      </div>
    </>
  );
};

export default Section;
