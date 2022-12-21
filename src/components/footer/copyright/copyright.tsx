import { Anchor, Text } from '@mantine/core';
import styles from './copyright.module.scss';

const Copyright = () => (
  <div className={styles.copyright}>
    <hr />
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
