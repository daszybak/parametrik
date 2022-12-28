import { forwardRef, useState } from 'react';
import { Container, Transition } from '@mantine/core';
import { useIntersection, useIsomorphicEffect, useMergedRef } from '@mantine/hooks';
import { useStyles } from './section.styles';

const TRANSITION_DURATION = 1000;

const SectionWrapper = forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<'div'> & {
    id: string;
  }
>(({ id, className, children, ...other }, ref) => {
  const { classes, cx } = useStyles({
    first: false,
    last: false,
  });

  return (
    <div key={id} ref={ref} className={cx(classes.sectionHeight, className)} {...other}>
      <div className={classes.id} id={id.replaceAll(' ', '-').toLowerCase()} />
      {children}
    </div>
  );
});

interface SectionProps extends React.ComponentPropsWithoutRef<'div'> {
  children: React.ReactNode;
  first?: boolean;
  id: string;
  last?: boolean;
}

export const SectionWithoutTransition = forwardRef<HTMLDivElement, SectionProps>(
  ({ id, className, children, first, last, ...other }, ref) => {
    const { classes, cx } = useStyles({
      first,
      last,
    });
    return (
      <SectionWrapper id={id} ref={ref}>
        <section>
          <Container fluid className={cx(classes.section, className)} id={id} key={id} {...other}>
            {children}
          </Container>
        </section>
      </SectionWrapper>
    );
  }
);

const Section = forwardRef<HTMLDivElement, SectionProps>(
  ({ children, id, first, last, className, ...other }, ref) => {
    const { classes, cx } = useStyles({
      first,
      last,
    });
    const { ref: intersectionRef, entry } = useIntersection({
      rootMargin: '-100px',
      threshold: 0,
      root: null,
    });
    const interesecting = entry?.isIntersecting;
    const [interesected, setIntersected] = useState<boolean>(false);
    useIsomorphicEffect(() => {
      if (interesected) return;
      setIntersected(interesecting);
    }, [interesecting]);
    const mergedRef = useMergedRef(ref, intersectionRef);

    return (
      <SectionWrapper id={id} ref={mergedRef} className={cx(classes.sectionHeight, className)}>
        <Transition transition="fade" duration={TRANSITION_DURATION} mounted={interesected}>
          {(styles) => (
            <SectionWithoutTransition
              id={id}
              style={styles}
              first={first}
              last={last}
              className={className}
              {...other}
            >
              {children}
            </SectionWithoutTransition>
          )}
        </Transition>
      </SectionWrapper>
    );
  }
);

export default Section;
