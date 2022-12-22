import { Anchor, Flex, FlexProps } from '@mantine/core';
import { links } from 'src/constants';

interface FnNavLinksProps extends FlexProps {}

const FNavLinks: React.FC<FnNavLinksProps> = (props) => {
  const renderedLinks = links.map(({ href, title, icon }) => (
    <Anchor key={href} href={href} size="xl" transform="uppercase">
      <Flex align="center" gap="md">
        {icon}
        {title}
      </Flex>
    </Anchor>
  ));

  return (
    <Flex wrap="wrap" gap="3rem" align="center" {...props}>
      {renderedLinks}
    </Flex>
  );
};

export default FNavLinks;
