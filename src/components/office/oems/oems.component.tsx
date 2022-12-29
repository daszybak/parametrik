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
    '/oems2/Audi.svg',
    '/oems2/BMW.svg',
    '/oems2/Jaguar.svg',
    '/oems2/Land_Rover.svg',
    '/oems2/Škoda.svg',
    '/oems2/VW.svg',
  ].map((image) => <BrandImage key={image} image={image} />);

  const secondRowImages = [
    '/oems2/Bentley.svg',
    '/oems2/Lamborghini.svg',
    '/oems2/Mercedes-Benz.svg',
    '/oems2/Porsche.svg',
    '/oems2/Volvo.svg',
  ].map((image) => <BrandImage key={image} image={image} />);

  return (
    <div className={classes.oem}>
      <div className={classes.firstRow}>{firstRowImages}</div>
      <div className={classes.secondRow}>{secondRowImages}</div>
    </div>
  );
};

export default Oems;
