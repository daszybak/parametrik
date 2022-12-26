import { Text } from '@mantine/core';
import { useTranslation } from 'react-i18next';
import SectionTitle from 'src/components/section-title/section-title.component';
import Section from 'src/components/section/section.component';
import { useStyles } from './feasibility-study.styles';

const GridItem = ({ children }: { children: React.ReactNode }) => {
  const { classes } = useStyles();

  return <div className={classes.gridItem}>{children}</div>;
};

interface GridProps {
  children: React.ReactNode;
}

const Grid: React.FC<GridProps> & {
  Item: typeof GridItem;
} = ({ children }) => {
  const { classes } = useStyles();

  return <div className={classes.grid}>{children}</div>;
};

Grid.Item = GridItem;

interface FeasibilityStudyProps {}

const FeasibilityStudy: React.FC<FeasibilityStudyProps> = () => {
  const { t } = useTranslation();
  const name = 'feasibility-study';

  return (
    <Section id={name}>
      <SectionTitle align="center">{t<string>(`home:workflow-areas.${name}`)}</SectionTitle>
      <Text>{t<string>('home:feasibility-study-text.text2')}</Text>
      <Grid>
        <Grid.Item>
          <Text>{t<string>('home:feasibility-study-process.part-positioning')}</Text>
        </Grid.Item>
        <Grid.Item>
          <Text>{t<string>('home:feasibility-study-process.creating-geometry')}</Text>
        </Grid.Item>
        <Grid.Item>
          <Text>{t<string>('home:feasibility-study-process.simulation')}</Text>
        </Grid.Item>
        <Grid.Item>
          <Text>{t<string>('home:feasibility-study-process.preliminary-method')}</Text>
        </Grid.Item>
        <Grid.Item>
          <Text>{t<string>('home:feasibility-study-process.simulation-report')}</Text>
        </Grid.Item>
        <Grid.Item>
          <Text>{t<string>('home:feasibility-study-process.change-request')}</Text>
        </Grid.Item>
      </Grid>
      <Text>{t<string>('home:feasibility-study-text.text2-2')}</Text>
    </Section>
  );
};

export default FeasibilityStudy;
