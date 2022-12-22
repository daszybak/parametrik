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
    <Container fluid className={classes.footer}>
      <div className="wrapper">
        <div className="text-center">
          <ContactForm className={classes.marginB5} />
          <FNavLinks className={classes.marginB5} />
          <FInfo className={classes.marginB5} />
          <Copyright />
        </div>
      </div>
    </Container>
  );
};

export default Footer;
