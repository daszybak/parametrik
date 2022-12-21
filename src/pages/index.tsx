import DetailConceptPlan from 'src/components/detail-concept-plan/detail-concept-plan';
import FeasibilityStudy from 'src/components/feasibility-study/feasibility-study.component';
import Hero from 'src/components/hero/hero.component';
import Workflow from 'src/components/workflow/workflow.component';

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
