import { Anchor, Title } from '@mantine/core';
import React from 'react';
import { RiLinkedinBoxLine } from 'react-icons/ri';
import Logo from 'src/components/logo/logo.component';
import styles from './fInfo.module.scss';

interface FInfoProps extends React.ComponentPropsWithRef<'div'> {}

const FInfo: React.FC<FInfoProps> = () => (
  <div className={styles.fInfo}>
    <div className={styles['grid-l']}>
      <Logo />
      <div className={styles.item}>
        <Title order={4} className={styles.title}>
          CONTACT
        </Title>
        <div className={styles['grid-sm']}>
          <Anchor href="mailto:info@parametrik.hr">info@parametrik.hr</Anchor>
          <Anchor href="tel:+ 38516011520"> tel: + 385 (0)1 6011 520</Anchor>
          Parametrik d.o.o. <br />
          HR-10000 Zagreb <br />
          Zagrebačka cesta 143a
        </div>
      </div>
      <div className={styles.item}>
        <Title order={4} className={styles.title}>
          FIND US ON
        </Title>
        <span>
          <Anchor
            href="https://www.linkedin.com/parametrik.hr"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline',
            }}
          >
            <RiLinkedinBoxLine size={36} />
          </Anchor>
        </span>
      </div>
    </div>
  </div>
);

export default FInfo;
