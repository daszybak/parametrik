import { Anchor, Flex, FlexProps, Title } from '@mantine/core';
import { links } from 'src/links';

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
    <>
      <Title
        order={3}
        style={{
          margin: '2rem 0',
          marginTop: '5rem',
        }}
      >
        Links
      </Title>
      <nav>
        <Flex wrap="wrap" justify="center" gap="3rem" align="center" {...props}>
          {renderedLinks}
        </Flex>
      </nav>
    </>
  );
};

export default FNavLinks;
