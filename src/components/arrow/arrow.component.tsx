import { useStyles } from './arrow.styles';

interface ArrowProps {}

const Arrow: React.FC<ArrowProps> = () => {
  const { classes } = useStyles();

  return <div className={classes.arrow} />;
};

export default Arrow;
