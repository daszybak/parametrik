import { Flex, Text, Title } from '@mantine/core';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import SectionTitle from 'src/components/section-title/section-title.component';
import Section from 'src/components/section/section.component';
import { useStyles } from './workflow.styles';

interface WorkflowProps {}

const Workflow: React.FC<WorkflowProps> = () => {
  const { classes, cx } = useStyles();
  const { t } = useTranslation();
  const name = 'workflow';

  return (
    <Section id={name}>
      <SectionTitle>{t<string>(`common:navbar.${name}`)}</SectionTitle>
      <Text
        style={{
          marginBottom: '3rem',
        }}
      >
        {t<string>('home:workflow-text.text1')}
      </Text>
      <Flex
        sx={{
          '@media (max-width: 1200px)': {
            flexDirection: 'column',
          },
          height: '100%',
        }}
        align="center"
        gap="10rem"
      >
        <div className={classes.playerWrapper}>
          <video
            className={cx(classes.reactPlayer, classes.border)}
            src="/workflow/workflow.mp4"
            autoPlay
            muted
            width={600}
            height={600}
            loop
          />
        </div>
        <div className={classes.grid}>
          <div className={cx(classes.gridItem)}>
            <Title order={4} className={classes.gridItemTitle}>
              {t<string>('home:workflow-areas.feasibility-study')}
            </Title>
            <Image
              src="/workflow/Picture1.jpg"
              alt={t<string>('home:workflow-areas.feasibility-study')}
              width={200}
              height={160}
              className={classes.border}
            />
          </div>
          <div className={cx(classes.gridItem)}>
            <Title order={4} className={classes.gridItemTitle}>
              {t<string>('home:workflow-areas.feasibility-study')}
            </Title>
            <Image
              src="/workflow/Picture1.jpg"
              alt={t<string>('home:workflow-areas.feasibility-study')}
              width={200}
              height={160}
              className={classes.border}
            />
          </div>
          <div className={cx(classes.gridItem)}>
            <Title order={4} className={classes.gridItemTitle}>
              {t<string>('home:workflow-areas.feasibility-study')}
            </Title>
            <Image
              src="/workflow/Picture1.jpg"
              alt={t<string>('home:workflow-areas.feasibility-study')}
              width={200}
              height={160}
              className={classes.border}
            />
          </div>
          <div className={cx(classes.gridItem)}>
            <Title order={4} className={classes.gridItemTitle}>
              {t<string>('home:workflow-areas.feasibility-study')}
            </Title>
            <Image
              src="/workflow/Picture1.jpg"
              alt={t<string>('home:workflow-areas.feasibility-study')}
              width={200}
              height={160}
              className={classes.border}
            />
          </div>
          <div className={cx(classes.gridItem)}>
            <Title order={4} className={classes.gridItemTitle}>
              {t<string>('home:workflow-areas.feasibility-study')}
            </Title>
            <Image
              src="/workflow/Picture1.jpg"
              alt={t<string>('home:workflow-areas.feasibility-study')}
              width={200}
              height={160}
              className={classes.border}
            />
          </div>
          <div className={cx(classes.gridItem)}>
            <Title order={4} className={classes.gridItemTitle}>
              {t<string>('home:workflow-areas.feasibility-study')}
            </Title>
            <Image
              src="/workflow/Picture1.jpg"
              alt={t<string>('home:workflow-areas.feasibility-study')}
              width={200}
              height={160}
              className={classes.border}
            />
          </div>
        </div>
      </Flex>
    </Section>
  );
};

export default Workflow;
