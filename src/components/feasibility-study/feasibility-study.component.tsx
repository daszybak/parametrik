import SectionTitle from 'src/components/section-title/section-title.component';
import Section from 'src/components/section/section.component';

interface FeasibilityStudyProps {}

const FeasibilityStudy: React.FC<FeasibilityStudyProps> = () => {
  const name = 'Feasibility study';

  return (
    <Section id={name}>
      <SectionTitle align="center">Feasibility study</SectionTitle>
    </Section>
  );
};

export default FeasibilityStudy;
