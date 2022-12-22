import { Container } from '@mantine/core';
import ContactForm from '../contact-form/contact-form.component';
import Copyright from './copyright/copyright';
import FInfo from './fInfo/fInfo';
import FNavLinks from './fnavLinks/fnavLinks';
import { useStyles } from './footer.styles';

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  const { classes } = useStyles();

  return (
    <div className={classes.footer}>
      <Container fluid>
        <div className="wrapper">
          <div className="text-center">
            <ContactForm />
            <FNavLinks
              style={{
                marginBottom: '5rem',
              }}
            />
            <FInfo />
            <Copyright />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
