import Image from 'next/image';
import Link from 'next/link';

interface LogoProps {}

const Logo: React.FC<LogoProps> = () => (
  <Link href="/">
    <Image src="/logo-05.png" alt="Parametrik Engineering" width={318} height={100} />
  </Link>
);

export default Logo;