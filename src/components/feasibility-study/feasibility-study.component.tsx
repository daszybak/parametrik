import Image from 'next/image';
import { Button, Flex, Text, Title } from '@mantine/core';
import { useTranslation } from 'react-i18next';
import SectionTitle from 'src/components/section-title/section-title.component';
import Section from 'src/components/section/section.component';
// import Arrow from '../arrow/arrow.component';
import Link from 'next/link';
import { links } from 'src/links';
import { HiArrowUturnRight, HiArrowRight } from 'react-icons/hi2';
import { useStyles } from './feasibility-study.styles';
import ImageGallery from '../image-gallery/image-gallery.component';
import Grid from '../grid/grid.component';

const SIMULATION_AND_POST_PROCESS_ANALYSIS_PROPS = {
  width: 140,
  height: 95,
  alt: 'Simulation-and-post-process-analysis',
};

interface FeasibilityStudyProps {}

const FeasibilityStudy: React.FC<FeasibilityStudyProps> = () => {
  const { classes, cx } = useStyles();
  const { t } = useTranslation();
  const name = 'feasibility-study';

  return (
    <Section id={name}>
      <SectionTitle align="center">{t<string>(`home:workflow-areas.${name}`)}</SectionTitle>
      <Text className={classes.marginB3}>{t<string>('home:feasibility-study-text.text2')}</Text>
      <Grid className={classes.marginB3}>
        <Grid.Item>
          <HiArrowRight className={classes.arrow} />
          <Title
            order={4}
            transform="capitalize"
            className={cx(classes.marginB2, classes.itemTitle)}
          >
            {t<string>('home:feasibility-study-process.part-positioning')}
          </Title>
          <Flex
            justify="center"
            align="center"
            style={{
              height: '100%',
            }}
          >
            <Image
              src="/feasibility-study/01_Part_Positioning.png"
              alt="Part Positioning"
              width={240}
              height={150}
            />
          </Flex>
        </Grid.Item>
        <Grid.Item>
          <HiArrowRight className={classes.arrow} />
          <Title
            order={4}
            transform="capitalize"
            className={cx(classes.marginB2, classes.itemTitle)}
          >
            {t<string>('home:feasibility-study-process.creating-geometry')}
          </Title>
          <Flex
            justify="center"
            align="center"
            style={{
              height: '100%',
            }}
          >
            <Image
              src="/feasibility-study/02_Creation-of-geometry.png"
              alt="Creation of geometry"
              width={240}
              // 240 divided by 4 /3
              height={180}
            />
          </Flex>
        </Grid.Item>
        <Grid.Item>
          <HiArrowUturnRight className={cx(classes.arrow, classes.arrow2)} />
          <Title
            order={4}
            transform="capitalize"
            className={cx(classes.marginB2, classes.itemTitle)}
          >
            {t<string>('home:feasibility-study-process.simulation')}
          </Title>
          <Flex
            justify="center"
            align="center"
            style={{
              height: '100%',
            }}
          >
            <ImageGallery
              style={{
                width: '300px',
              }}
              images={[
                {
                  src: '/feasibility-study/02_Simulation-and-post-process-analysis01.png',
                  ...SIMULATION_AND_POST_PROCESS_ANALYSIS_PROPS,
                },
                {
                  src: '/feasibility-study/02_Simulation-and-post-process-analysis02.png',
                  ...SIMULATION_AND_POST_PROCESS_ANALYSIS_PROPS,
                },
                {
                  src: '/feasibility-study/02_Simulation-and-post-process-analysis03.png',
                  ...SIMULATION_AND_POST_PROCESS_ANALYSIS_PROPS,
                },
                {
                  src: '/feasibility-study/02_Simulation-and-post-process-analysis04.png',
                  ...SIMULATION_AND_POST_PROCESS_ANALYSIS_PROPS,
                },
              ]}
            />
          </Flex>
        </Grid.Item>

        <Grid.Item>
          <HiArrowRight className={classes.arrow} />
          <Title
            order={4}
            transform="capitalize"
            className={cx(classes.marginB2, classes.itemTitle)}
          >
            {t<string>('home:feasibility-study-process.preliminary-method')}
          </Title>
          <Flex
            justify="center"
            align="center"
            style={{
              height: '100%',
            }}
          >
            <ImageGallery
              style={{
                width: '300px',
              }}
              images={[
                {
                  src: '/feasibility-study/04_2DConceptplan01.png',
                  ...SIMULATION_AND_POST_PROCESS_ANALYSIS_PROPS,
                  alt: '2D Concept plan',
                },
                {
                  src: '/feasibility-study/04_2DConceptplan02.png',
                  ...SIMULATION_AND_POST_PROCESS_ANALYSIS_PROPS,
                  alt: '2D Concept plan',
                },
                {
                  src: '/feasibility-study/04_2DConceptplan03.png',
                  ...SIMULATION_AND_POST_PROCESS_ANALYSIS_PROPS,
                  alt: '2D Concept plan',
                },
                {
                  src: '/feasibility-study/04_2DConceptplan04.png',
                  ...SIMULATION_AND_POST_PROCESS_ANALYSIS_PROPS,
                  alt: '2D Concept plan',
                },
              ]}
            />
          </Flex>
        </Grid.Item>
        <Grid.Item>
          <HiArrowRight className={classes.arrow} />
          <Title
            order={4}
            transform="capitalize"
            className={cx(classes.marginB2, classes.itemTitle)}
          >
            {t<string>('home:feasibility-study-process.change-request')}
          </Title>
          <Flex
            justify="center"
            align="center"
            style={{
              height: '100%',
            }}
          >
            <ImageGallery
              style={{
                width: '300px',
              }}
              images={[
                {
                  src: '/feasibility-study/05_SimReport01.png',
                  ...SIMULATION_AND_POST_PROCESS_ANALYSIS_PROPS,
                  alt: 'Simulation report',
                },
                {
                  src: '/feasibility-study/05_SimReport02.png',
                  ...SIMULATION_AND_POST_PROCESS_ANALYSIS_PROPS,
                  alt: 'Simulation report',
                },
                {
                  src: '/feasibility-study/05_SimReport03.png',
                  ...SIMULATION_AND_POST_PROCESS_ANALYSIS_PROPS,
                  alt: 'Simulation report',
                },
              ]}
            />
          </Flex>
        </Grid.Item>
        <Grid.Item>
          <HiArrowRight className={classes.arrow} />
          <Title
            order={4}
            transform="capitalize"
            className={cx(classes.marginB2, classes.itemTitle)}
          >
            {t<string>('home:feasibility-study-process.simulation-report')}
          </Title>
          <Flex
            justify="center"
            align="center"
            style={{
              height: '100%',
            }}
          >
            <Image
              src="/feasibility-study/03_Changerequest.png"
              alt="Change request"
              width={200}
              // 240 divided by 4 /3
              height={200}
            />
          </Flex>
        </Grid.Item>
      </Grid>
      <Flex justify="space-between">
        <div />
        <Link
          href={links.filter((link) => link.title === 'portfolio')[0].href}
          style={{
            textDecoration: 'none',
          }}
        >
          <Button variant="filled">
            <Flex align="center" gap="1rem">
              More examples
              <HiArrowRight />
            </Flex>
          </Button>
        </Link>
      </Flex>
    </Section>
  );
};

export default FeasibilityStudy;
