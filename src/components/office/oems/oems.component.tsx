import Image from 'next/image';
import { useStyles } from './oems.styles';

const brandFromImage = (image: string) => image.match(/\/oems\/(.*)\./)?.[1] ?? 'OEM';

const BrandImage = ({ image }: { image: string }) => (
  <Image src={image} key={image} alt={brandFromImage(image)} width={100} height={100} />
);

interface OemsProps {}

const Oems: React.FC<OemsProps> = () => {
  const { classes } = useStyles();

  const firstRowImages = [
    '/oems/Audi.svg',
    '/oems/BMW.svg',
    '/oems/Jaguar.svg',
    '/oems/Land_Rover.svg',
    '/oems/Škoda.svg',
    '/oems/VW.svg',
  ].map((image) => <BrandImage key={image} image={image} />);

  const secondRowImages = [
    '/oems/Bentley.svg',
    '/oems/Lamborghini.svg',
    '/oems/Mercedes_Daimler.svg',
    '/oems/Porsche.svg',
    '/oems/Volvo.svg',
  ].map((image) => <BrandImage key={image} image={image} />);

  return (
    <div>
      <div className={classes.firstRow}>{firstRowImages}</div>
      <div className={classes.secondRow}>{secondRowImages}</div>
    </div>
  );
};

export default Oems;
