import { Anchor, Title } from '@mantine/core';
import { RiLinkedinBoxLine } from 'react-icons/ri';
import Logo from 'src/components/logo/logo.component';
import styles from './fInfo.module.scss';

const FInfo = () => (
  <div className={styles.fInfo}>
    <div className={styles['grid-l']}>
      <Logo />

      <div className={styles.item}>
        <Title order={4} className={styles.title}>
          CONTACT
        </Title>
        <div className={styles['grid-sm']}>
          <Anchor href="mailto:info@parametrik.hr">info@parametrik.hr</Anchor>
          <Anchor href="tel:+38591123456"> tel: +385 91 123456</Anchor>
          Parametrik d.o.o. <br />
          HR-10000 Zagreb <br />
          Zagrebačka cesta 143a
        </div>
      </div>
      <div className={styles.item}>
        <Title order={4} className={styles.title}>
          FIND US ON
        </Title>
        <Anchor href="https://www.linkedin.com/parametrik.hr">
          <RiLinkedinBoxLine size={36} />
        </Anchor>
      </div>
    </div>
  </div>
);

export default FInfo;
