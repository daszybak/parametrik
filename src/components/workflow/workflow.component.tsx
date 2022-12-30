import { Flex, Text, Title } from '@mantine/core';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import SectionTitle from 'src/components/section-title/section-title.component';
import Section from 'src/components/section/section.component';
import { HiArrowDown, HiArrowUturnUp } from 'react-icons/hi2';
import { useViewportSize } from '@mantine/hooks';
import { useStyles } from './workflow.styles';

interface WorkflowProps {}

const Workflow: React.FC<WorkflowProps> = () => {
  const { classes, cx } = useStyles();
  const { t } = useTranslation();
  const name = 'workflow';
  const { width } = useViewportSize();

  const videoSize = {
    width: width < 900 ? (width < 600 ? 266 : 400) : 600,
    height: width < 900 ? (width < 600 ? 266 : 400) : 600,
  };

  return (
    <Section
      id={name}
      style={{
        marginTop: '8rem',
      }}
    >
      <SectionTitle>{t<string>(`common:navbar.${name}`)}</SectionTitle>
      <Text className={classes.text}>{t<string>('home:workflow-text.text1')}</Text>
      <Flex className={classes.flexContainer} align="center" justify="space-around">
        <div className={classes.playerWrapper}>
          <video
            className={cx(classes.reactPlayer, classes.border)}
            src="/workflow/workflow.mp4"
            autoPlay
            muted
            {...videoSize}
            loop
          />
        </div>
        <div className={classes.grid}>
          <div className={cx(classes.gridItem)}>
            <Title order={4} className={classes.gridItemTitle}>
              {t<string>('home:workflow-areas.feasibility-study')}
            </Title>
            <div className={classes.image}>
              <Image
                src="/workflow/Picture4.png"
                alt={t<string>('home:workflow-areas.feasibility-study')}
                fill
                className={classes.border}
              />
            </div>
            <HiArrowDown className={classes.arrow} />
          </div>
          <div className={cx(classes.gridItem)}>
            <Title order={4} className={classes.gridItemTitle}>
              {t<string>('home:workflow-areas.detail-method-plan')}
            </Title>
            <div className={classes.image}>
              <Image
                src="/workflow/Picture2.png"
                alt={t<string>('home:workflow-areas.detail-method-plan')}
                fill
                className={classes.border}
              />
            </div>
            <HiArrowDown className={classes.arrow} />
          </div>
          <div className={cx(classes.gridItem)}>
            <Title order={4} className={classes.gridItemTitle}>
              {t<string>('home:workflow-areas.tool-construction')}
            </Title>
            <div className={classes.image}>
              <Image
                src="/workflow/Picture1.jpg"
                alt={t<string>('home:workflow-areas.tool-construction')}
                fill
                className={classes.border}
              />
            </div>
            <HiArrowUturnUp className={classes.arrow} />
          </div>
          <div className={cx(classes.gridItem)}>
            <Title order={4} className={classes.gridItemTitle}>
              {t<string>('home:workflow-areas.final-part')}
            </Title>
            <div>
              <div className={classes.image}>
                <Image
                  src="/workflow/Picture5.jpg"
                  alt={t<string>('home:workflow-areas.final-part')}
                  fill
                  className={classes.border}
                />
              </div>
            </div>
            <HiArrowDown className={classes.arrow} />
          </div>
          <div
            className={cx(classes.gridItem)}
            style={{
              gridColumn: '2 / 3',
              gridRow: '2 / 4',
            }}
          >
            <div className={cx(classes.bigImage)}>
              <Image
                src="/workflow/Pic9.jpg"
                alt={t<string>('home:workflow-areas.final-part')}
                fill
              />
            </div>
          </div>
        </div>
      </Flex>
    </Section>
  );
};

export default Workflow;
