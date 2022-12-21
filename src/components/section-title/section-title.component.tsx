import { Flex, Title, TitleProps } from '@mantine/core';
import Link from 'next/link';
import { useStyles } from './section-title.styles';

interface SectionTitleProps extends TitleProps {
  children: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ children, align, ...other }) => {
  const { classes } = useStyles();

  return (
    <span>
      <Link
        href={`#${children}`}
        style={{
          textDecoration: 'none',
          color: 'inherit',
          display: 'inline',
        }}
      >
        <Flex justify={align}>
          <Title
            id={children}
            className={classes.title}
            style={{
              display: 'inline',
            }}
            {...other}
          >
            {children}
          </Title>
        </Flex>
      </Link>
    </span>
  );
};

export default SectionTitle;
