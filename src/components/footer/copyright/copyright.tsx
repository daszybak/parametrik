import { Anchor, Divider, Text } from '@mantine/core';

const Copyright = () => (
  <div>
    <Divider
      style={{
        marginBottom: '1rem',
      }}
    />
    <Text size="sm" align="center">
      Parametrik Engineering, 2022. Sva prava pridržana. | Design by
      <Anchor href="https://www.karlodelmis.com/" target="_blank" rel="noopener noreferrer">
        {' '}
        karlodelmis.com
      </Anchor>
    </Text>
  </div>
);

export default Copyright;
