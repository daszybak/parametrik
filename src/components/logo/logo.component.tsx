import Image from 'next/image';
import Link from 'next/link';
import { useStyles } from './logo.styles';

interface LogoProps {}

const Logo: React.FC<LogoProps> = () => {
  const { classes } = useStyles();

  return (
    <Link href="/" className={classes.logo}>
      <Image
        src="/logo.png"
        alt="Parametrik Engineering"
        fill
        sizes="(max-width: 900px) 190px, 318px"
      />
    </Link>
  );
};

export default Logo;
