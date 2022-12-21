import { Container } from '@mantine/core';
import Logo from 'src/components/logo/logo.component';
import ContactForm from '../contact-form/contact-form.component';
import Copyright from './copyright/copyright';
import FInfo from './fInfo/fInfo';
import FNav from './fnav/fnav';

import styles from './footer.module.scss';

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => (
  <Container size="xl" className={styles.footer}>
    <div className="wrapper">
      <div className="text-center">
        <div className={styles.logo}>
          <ContactForm />
          <Logo />
        </div>
        <FNav />

        <FInfo />
        <Copyright />
      </div>
    </div>
  </Container>
);

export default Footer;
