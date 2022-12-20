import { Container } from '@mantine/core';
import { useStyles } from './section.styles';

interface SectionProps {
  children: React.ReactNode;
  first?: boolean;
}

const Section: React.FC<SectionProps> = ({ children, first }) => {
  const { classes } = useStyles({
    first,
  });
  return (
    <Container size="xl" className={classes.section}>
      {children}
    </Container>
  );
};

export default Section;
