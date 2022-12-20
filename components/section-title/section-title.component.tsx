import { Title, TitleProps } from '@mantine/core';
import { useStyles } from './section-title.styles';

interface SectionTitleProps extends TitleProps {
  children: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ children, ...other }) => {
  const { classes } = useStyles();

  return (
    <Title className={classes.title} {...other}>
      {children}
    </Title>
  );
};

export default SectionTitle;
