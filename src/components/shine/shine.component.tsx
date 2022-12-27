import { useStyles } from './shine.styles';

interface ShineProps {
  children: React.ReactNode;
}

const Shine: React.FC<ShineProps> = ({ children }) => {
  const { classes } = useStyles();

  return <div className={classes.shine}>{children}</div>;
};

export default Shine;
