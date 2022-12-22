import { Flex, Title, TitleProps } from '@mantine/core';
import Link from 'next/link';
import { useStyles } from './section-title.styles';

interface SectionTitleProps extends TitleProps {
  children: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ children, align, ...other }) => {
  const { classes } = useStyles();

  return (
    <>
      <div
        id={children}
        style={{
          transform: 'translateY(-2rem)',
        }}
      />
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
    </>
  );
};

export default SectionTitle;
