import { Text, Title } from '@mantine/core';
import { useTranslation } from 'react-i18next';
import SectionTitle from 'src/components/section-title/section-title.component';
import Section from 'src/components/section/section.component';
// import Arrow from '../arrow/arrow.component';
import { useStyles } from './feasibility-study.styles';

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

interface FeasibilityStudyProps {}

const FeasibilityStudy: React.FC<FeasibilityStudyProps> = () => {
  const { classes } = useStyles();
  const { t } = useTranslation();
  const name = 'feasibility-study';

  return (
    <Section id={name}>
      <SectionTitle align="center">{t<string>(`home:workflow-areas.${name}`)}</SectionTitle>
      <Text className={classes.marginB3}>{t<string>('home:feasibility-study-text.text2')}</Text>
      <Grid className={classes.marginB3}>
        <Grid.Item>
          <Title order={4} transform="capitalize">
            {t<string>('home:feasibility-study-process.part-positioning')}
          </Title>
        </Grid.Item>
        <Grid.Item>
          <Title order={4} transform="capitalize">
            {t<string>('home:feasibility-study-process.creating-geometry')}
          </Title>
        </Grid.Item>
        <Grid.Item>
          <Title order={4} transform="capitalize">
            {t<string>('home:feasibility-study-process.simulation')}
          </Title>
        </Grid.Item>
        <Grid.Item>
          <Title order={4} transform="capitalize">
            {t<string>('home:feasibility-study-process.preliminary-method')}
          </Title>
        </Grid.Item>
        <Grid.Item>
          <Title order={4} transform="capitalize">
            {t<string>('home:feasibility-study-process.simulation-report')}
          </Title>
        </Grid.Item>
        <Grid.Item>
          <Title order={4} transform="capitalize">
            {t<string>('home:feasibility-study-process.change-request')}
          </Title>
        </Grid.Item>
      </Grid>
      <Text transform="capitalize">{t<string>('home:feasibility-study-text.text2-2')}</Text>
    </Section>
  );
};

export default FeasibilityStudy;
