import Link from 'next/link';
import Image from 'next/image';
import { Button, Flex, Text, Title } from '@mantine/core';
import { useTranslation } from 'react-i18next';
import SectionTitle from 'src/components/section-title/section-title.component';
import Section from 'src/components/section/section.component';
// import Arrow from '../arrow/arrow.component';
import { links } from 'src/links';
import { HiArrowUturnRight, HiArrowRight } from 'react-icons/hi2';
import { useViewportSize } from '@mantine/hooks';
import { useStyles } from './tool-construction.styles';
import Grid from '../grid/grid.component';
import { BREAKPOINTS } from '../detail-concept-plan/detail-concept-plan.component';

interface DetailConceptPlanProps {}

const DetailConceptPlan: React.FC<DetailConceptPlanProps> = () => {
  const { classes, cx } = useStyles();
  const { t } = useTranslation();
  const { width } = useViewportSize();
  const name = 'tool-construction';

  return (
    <Section id={name}>
      <SectionTitle align="center">{t<string>(`home:workflow-areas.${name}`)}</SectionTitle>
      <Text className={classes.marginB3}>{t<string>('home:tool-construction.text4')}</Text>
      <Grid className={classes.marginB3}>
        <Grid.Item>
          {width > BREAKPOINTS.xs ? <HiArrowRight className={classes.arrow} /> : null}
          <Title
            order={4}
            transform="capitalize"
            className={cx(classes.marginB2, classes.itemTitle)}
          >
            {t<string>('home:tool-construction-process.usingCAD')}
          </Title>
          <Flex
            justify="center"
            align="center"
            style={{
              height: '100%',
            }}
          >
            <Flex
              gap="2rem"
              sx={{
                '@media (max-width: 550px)': {
                  flexDirection: 'column',
                },
              }}
            >
              <Image
                src="/tool-construction/01_CAD_Surfaces01.JPG"
                alt={t<string>('home:tool-construction-process.usingCAD')}
                width={240}
                height={200}
              />
              <Image
                src="/tool-construction/01_CAD_Surfaces02.JPG"
                alt={t<string>('home:tool-construction-process.usingCAD')}
                width={200}
                height={160}
              />
            </Flex>
          </Flex>
        </Grid.Item>
        <Grid.Item>
          {width > BREAKPOINTS.md ? (
            <HiArrowRight className={classes.arrow} />
          ) : width > BREAKPOINTS.xs ? (
            <HiArrowUturnRight className={cx(classes.arrow, classes.arrow2)} />
          ) : null}
          <Title
            order={4}
            transform="capitalize"
            className={cx(classes.marginB2, classes.itemTitle)}
          >
            {t<string>('home:tool-construction-process.creating-parts')}
          </Title>
          <Flex
            justify="center"
            align="center"
            style={{
              height: '100%',
            }}
          >
            <Image
              src="/tool-construction/02_Active_parts.jpg"
              alt={t<string>('home:tool-construction-process.creating-parts')}
              width={240}
              // 240 divided by 4 /3
              height={180}
            />
          </Flex>
        </Grid.Item>
        <Grid.Item>
          {width > BREAKPOINTS.xs ? <HiArrowRight className={classes.arrow} /> : null}
          <Title
            order={4}
            transform="capitalize"
            className={cx(classes.marginB2, classes.itemTitle)}
          >
            {t<string>('home:tool-construction-process.creating-post')}
          </Title>
          <Flex
            justify="center"
            align="center"
            style={{
              height: '100%',
            }}
            sx={{
              '@media (max-width: 550px)': {
                flexDirection: 'column',
              },
            }}
          >
            <Flex
              align="center"
              gap="2rem"
              sx={{
                '@media (max-width: 550px)': {
                  flexDirection: 'column',
                },
              }}
            >
              <Image
                src="/tool-construction/03_lower_upper_01.jpg"
                alt={t<string>('home:tool-construction-process.creating-post')}
                width={180}
                // 240 divided by 4 /3
                height={140}
              />
              <Image
                src="/tool-construction/03_lower_upper_02.jpg"
                alt={t<string>('home:tool-construction-process.creating-post')}
                width={180}
                // 240 divided by 4 /3
                height={140}
              />
            </Flex>
          </Flex>
        </Grid.Item>
        <Grid.Item>
          {width > BREAKPOINTS.md ? (
            <HiArrowRight className={classes.arrow} />
          ) : width > BREAKPOINTS.xs ? (
            <HiArrowUturnRight className={cx(classes.arrow, classes.arrow2)} />
          ) : null}
          <Title
            order={4}
            transform="capitalize"
            className={cx(classes.marginB2, classes.itemTitle)}
          >
            {t<string>('home:tool-construction-process.creating-die')}
          </Title>
          <Flex
            justify="center"
            align="center"
            style={{
              height: '100%',
            }}
          >
            <Flex
              align="center"
              gap="2rem"
              sx={{
                '@media (max-width: 550px)': {
                  flexDirection: 'column',
                },
              }}
            >
              <Image
                src="/tool-construction/04_Lowerdie.jpg"
                alt={t<string>('home:tool-construction-process.creating-post')}
                width={220}
                // 240 divided by 4 /3
                height={180}
              />
              <Image
                src="/tool-construction/04_Upperdie.jpg"
                alt={t<string>('home:tool-construction-process.creating-post')}
                width={220}
                // 240 divided by 4 /3
                height={180}
              />
            </Flex>
          </Flex>
        </Grid.Item>
        <Grid.Item>
          {width > BREAKPOINTS.xs ? <HiArrowRight className={classes.arrow} /> : null}
          <Title
            order={4}
            transform="capitalize"
            className={cx(classes.marginB2, classes.itemTitle)}
          >
            {t<string>('home:tool-construction-process.final-product')}
          </Title>
          <Flex
            justify="center"
            align="center"
            style={{
              height: '100%',
            }}
          >
            <Image
              src="/tool-construction/05_Finalproduct.jpg"
              alt={t<string>('home:tool-construction-process.final-product')}
              width={240}
              // 240 divided by 4 /3
              height={180}
            />
          </Flex>
        </Grid.Item>
        <Grid.Item>
          <Title
            order={4}
            transform="capitalize"
            className={cx(classes.marginB2, classes.itemTitle)}
          >
            {t<string>('home:tool-construction-process.tool-in')}
          </Title>
          <Flex
            justify="center"
            align="center"
            style={{
              height: '100%',
            }}
          >
            <Image
              src="/tool-construction/06_Finalproduct_inpress.jpg"
              alt={t<string>('home:tool-construction-process.tool-in')}
              width={230}
              height={180}
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

export default DetailConceptPlan;
