import { useTranslation } from 'react-i18next';
import SectionTitle from 'src/components/section-title/section-title.component';
import Section from 'src/components/section/section.component';

interface WorkflowProps {}

const Workflow: React.FC<WorkflowProps> = () => {
  const { t } = useTranslation();
  const name = 'workflow';

  return (
    <Section id={name}>
      <SectionTitle>{t<string>(`common:navbar.${name}`)}</SectionTitle>
    </Section>
  );
};

export default Workflow;
