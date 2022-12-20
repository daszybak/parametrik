import DetailConceptPlan from 'components/detail-concept-plan/detail-concept-plan';
import FeasibilityStudy from 'components/feasibility-study/feasibility-study.component';
import Hero from 'components/hero/hero.component';
import Workflow from 'components/workflow/workflow.component';

interface HomeProps {}

const Home: React.FC<HomeProps> = () => (
  <>
    <Hero />
    <Workflow />
    <FeasibilityStudy />
    <DetailConceptPlan />
  </>
);

export default Home;
