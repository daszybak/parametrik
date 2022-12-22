import SectionTitle from 'src/components/section-title/section-title.component';
import Section from 'src/components/section/section.component';

interface WorkflowProps {}

const Workflow: React.FC<WorkflowProps> = () => {
  const name = 'Workflow';

  return (
    <Section id={name}>
      <SectionTitle>Workflow</SectionTitle>
    </Section>
  );
};

export default Workflow;
