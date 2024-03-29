import { Flex, Title, TitleProps } from '@mantine/core';
import Link from 'next/link';
import { useStyles } from './section-title.styles';

interface SectionTitleProps extends TitleProps {
  children: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ children, align, ...other }) => {
  const { classes } = useStyles();

  return (
    <Flex justify={align}>
      <Link
        href={`#${children.replaceAll(' ', '-').toLowerCase()}`}
        style={{
          textDecoration: 'none',
          color: 'inherit',
          display: 'inline',
        }}
      >
        <Title
          className={classes.title}
          style={{
            display: 'block',
          }}
          {...other}
        >
          {children}
        </Title>
      </Link>
    </Flex>
  );
};

export default SectionTitle;
