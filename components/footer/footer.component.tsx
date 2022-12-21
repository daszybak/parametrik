import { Container } from '@mantine/core';
import ContactForm from 'components/contact-form/contact-form.component';

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => (
  <Container size="xl">
    <ContactForm />
  </Container>
);

export default Footer;
