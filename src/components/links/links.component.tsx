import { Flex } from '@mantine/core';
import Link, { LinkProps } from 'next/link';
import { links } from 'src/links';
import { useStyles } from './link.styles';

interface LinksProps extends Omit<LinkProps, 'href'> {}

const Links: React.FC<LinksProps> = ({ ...other }) => {
  const { classes } = useStyles();
  return (
    <>
      {links.map(({ href, title, icon }) => (
        <Link key={href} href={href} className={classes.link} {...other}>
          <Flex align="center" gap="md">
            {icon}
            {title}
          </Flex>
        </Link>
      ))}
    </>
  );
};

export default Links;
