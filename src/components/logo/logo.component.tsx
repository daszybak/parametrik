import Image from 'next/image';
import Link from 'next/link';
import { useContext } from 'react';
import { MenuContext } from 'src/context/menu/menuContextProvider';
import { useStyles } from './logo.styles';

interface LogoProps {
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
}

const Logo: React.FC<LogoProps> = ({ onClick }) => {
  const { classes } = useStyles();
  const { handleMenu } = useContext(MenuContext);

  return (
    <Link
      href="/"
      className={classes.logo}
      onClick={(e) => {
        onClick && onClick(e);
        () => handleMenu('close');
      }}
    >
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
