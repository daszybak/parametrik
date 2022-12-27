import Link from 'next/link';
import Image from 'next/image';
import { Button, Flex, Text, Title } from '@mantine/core';
import { useTranslation } from 'react-i18next';
import SectionTitle from 'src/components/section-title/section-title.component';
import Section from 'src/components/section/section.component';
// import Arrow from '../arrow/arrow.component';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { links } from 'src/links';
import { BsArrowReturnLeft } from 'react-icons/bs';
import { useStyles } from './detail-concept-plan.styles';
import Grid from '../grid/grid.component';

interface DetailConceptPlanProps {}

const DetailConceptPlan: React.FC<DetailConceptPlanProps> = () => {
  const { classes, cx } = useStyles();
  const { t } = useTranslation();
  const name = 'detail-method-plan';

  return (
    <Section id={name}>
      <SectionTitle align="end">{t<string>(`home:workflow-areas.${name}`)}</SectionTitle>
      <Text className={classes.marginB3}>{t<string>('home:detail-method-plan.text3')}</Text>
      <Grid className={classes.marginB3}>
        <Grid.Item>
          <AiOutlineArrowRight className={classes.arrow} />
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
              src="/detail-concept-plan/Serijskametoda-01_Pozicioniranje.JPG"
              alt={t<string>('home:feasibility-study-process.part-positioning')}
              width={240}
              height={200}
            />
          </Flex>
        </Grid.Item>
        <Grid.Item>
          <AiOutlineArrowRight className={classes.arrow} />
          <Title
            order={4}
            transform="capitalize"
            className={cx(classes.marginB2, classes.itemTitle)}
          >
            {t<string>('home:detail-method-plan.creating-punch')}
          </Title>
          <Flex
            justify="center"
            align="center"
            style={{
              height: '100%',
            }}
          >
            <Image
              src="/detail-concept-plan/Serijskametoda-02_KreiranjeStempela.JPG"
              alt={t<string>('home:detail-method-plan.creating-punch')}
              width={240}
              // 240 divided by 4 /3
              height={210}
            />
          </Flex>
        </Grid.Item>
        <Grid.Item>
          <BsArrowReturnLeft className={cx(classes.arrow, classes.arrow2)} />
          <Title
            order={4}
            transform="capitalize"
            className={cx(classes.marginB2, classes.itemTitle)}
          >
            {t<string>('home:detail-method-plan.creating-blankholder')}
          </Title>
          <Flex
            justify="center"
            align="center"
            style={{
              height: '100%',
            }}
          >
            <Flex align="center" gap="2rem">
              <Image
                src="/detail-concept-plan/Serijskametoda-03_KreiranjeBlechhaltera.JPG"
                alt={t<string>('home:detail-method-plan.creating-punch')}
                width={160}
                // 240 divided by 4 /3
                height={130}
              />
              <Image
                src="/detail-concept-plan/Serijskametoda-03_KreiranjeBlechhalterasaSickama.JPG"
                alt={t<string>('home:detail-method-plan.creating-punch')}
                width={220}
                // 240 divided by 4 /3
                height={180}
              />
            </Flex>
          </Flex>
        </Grid.Item>
        <Grid.Item>
          <AiOutlineArrowRight className={classes.arrow} />
          <Title
            order={4}
            transform="capitalize"
            className={cx(classes.marginB2, classes.itemTitle)}
          >
            {t<string>('home:detail-method-plan.creating-die')}
          </Title>
          <Flex
            justify="center"
            align="center"
            style={{
              height: '100%',
            }}
          >
            <Image
              src="/detail-concept-plan/Serijskametoda-04_Matrize_mit_Sicken.JPG"
              alt={t<string>('home:detail-method-plan.creating-die')}
              width={260}
              // 240 divided by 4 /3
              height={220}
            />
          </Flex>
        </Grid.Item>
        <Grid.Item>
          <AiOutlineArrowRight className={classes.arrow} />
          <Title
            order={4}
            transform="capitalize"
            className={cx(classes.marginB2, classes.itemTitle)}
          >
            {t<string>('home:detail-method-plan.defining-blank-size')}
          </Title>
          <Flex
            justify="center"
            align="center"
            style={{
              height: '100%',
            }}
          >
            <Flex align="center" gap="2rem">
              <Image
                src="/detail-concept-plan/Serijskametoda-05_Definiranje_Platine.JPG"
                alt={t<string>('home:detail-method-plan.defining-blank-size')}
                width={160}
                // 240 divided by 4 /3
                height={130}
              />
              <Image
                src="/detail-concept-plan/Serijskametoda-06_OdlazniBauteil.JPG"
                alt={t<string>('home:detail-method-plan.defining-blank-size')}
                width={220}
                // 240 divided by 4 /3
                height={180}
              />
            </Flex>
          </Flex>
        </Grid.Item>
        <Grid.Item>
          <Title
            order={4}
            transform="capitalize"
            className={cx(classes.marginB2, classes.itemTitle)}
          >
            {t<string>('home:detail-method-plan.trim-plan')}
          </Title>
          <Flex
            justify="center"
            align="center"
            style={{
              height: '100%',
            }}
          >
            <Flex align="center" gap="2rem">
              <Image
                src="/detail-concept-plan/Serijskametoda-07_Trimplan.JPG"
                alt={t<string>('home:detail-method-plan.trim-plan')}
                width={220}
                // 240 divided by 4 /3
                height={180}
              />
              <Image
                src="/detail-concept-plan/Serijskametoda-08_Restrike.JPG"
                alt={t<string>('home:detail-method-plan.trim-plan')}
                width={160}
                // 240 divided by 4 /3
                height={130}
              />
            </Flex>
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
              <AiOutlineArrowRight />
            </Flex>
          </Button>
        </Link>
      </Flex>
    </Section>
  );
};

export default DetailConceptPlan;
