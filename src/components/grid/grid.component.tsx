import { useStyles } from './grid.styles';

interface GridItemProps extends React.ComponentPropsWithRef<'div'> {
  children: React.ReactNode;
}

const GridItem: React.FC<GridItemProps> = ({ children, className, ...other }) => {
  const { classes, cx } = useStyles();

  return (
    <div className={cx(classes.gridItem, className)} {...other}>
      {/* <Arrow /> */}
      {children}
    </div>
  );
};

interface GridProps extends React.ComponentPropsWithRef<'div'> {
  children: React.ReactNode;
}

const Grid: React.FC<GridProps> & {
  Item: typeof GridItem;
} = ({ children, className, ...other }) => {
  const { classes, cx } = useStyles();

  return (
    <div className={cx(classes.grid, className)} {...other}>
      {children}
    </div>
  );
};

Grid.Item = GridItem;

export default Grid;
