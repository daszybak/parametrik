import { GetServerSideProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { DEFAULT_LOCALE } from 'src/components/constants';
import DetailConceptPlan from 'src/components/detail-concept-plan/detail-concept-plan.component';
import FeasibilityStudy from 'src/components/feasibility-study/feasibility-study.component';
import Hero from 'src/components/hero/hero.component';
import Location from 'src/components/location/location.component';
import Office from 'src/components/office/office.component';
import ToolConstruction from 'src/components/tool-construction/tool-construction.component';
import Workflow from 'src/components/workflow/workflow.component';

interface HomeProps {}

const Home: React.FC<HomeProps> = () => (
  <>
    <Hero />
    <Workflow />
    <FeasibilityStudy />
    <DetailConceptPlan />
    <ToolConstruction />
    <Office />
    <Location />
  </>
);

export const getServerSideProps: GetServerSideProps = async ({ locale = DEFAULT_LOCALE }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common', 'home'])),
  },
});

export default Home;
