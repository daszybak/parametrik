import { Flex, FlexProps, Title } from '@mantine/core';
import Links from 'src/components/links/links.component';

interface FnNavLinksProps extends FlexProps {}

const FNavLinks: React.FC<FnNavLinksProps> = (props) => (
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
        <Links />
      </Flex>
    </nav>
  </>
);

export default FNavLinks;
