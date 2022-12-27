import { Container, Transition } from '@mantine/core';
import { useIntersection, useIsomorphicEffect } from '@mantine/hooks';
import { useState } from 'react';
import { useStyles } from './section.styles';

const TRANSITION_DURATION = 1000;

interface SectionProps extends React.ComponentPropsWithRef<'div'> {
  children: React.ReactNode;
  first?: boolean;
  id: string;
  last?: boolean;
}

const Section: React.FC<SectionProps> = ({ children, id, first, last, className, ...other }) => {
  const { classes, cx } = useStyles({
    first,
    last,
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
      <div key={id} ref={ref} className={cx(classes.sectionHeight, className)} {...other}>
        <div className={classes.id} id={id.replaceAll(' ', '-').toLowerCase()} />
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
