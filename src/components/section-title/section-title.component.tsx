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
      <Flex justify={align}>
        <Link
          href={`#${children}`}
          style={{
            textDecoration: 'none',
            color: 'inherit',
            display: 'inline',
          }}
        >
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
        </Link>
      </Flex>
    </span>
  );
};

export default SectionTitle;
