import { useTranslation } from 'react-i18next';
import SectionTitle from '../section-title/section-title.component';
import Section from '../section/section.component';

interface ToolConstructionProps {}

// eslint-disable-next-line max-len
const ToolConstruction: React.FC<ToolConstructionProps> = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t } = useTranslation();
  const name = 'Tool Construction';

  return (
    <Section id={name}>
      <SectionTitle align="center">{name}</SectionTitle>
    </Section>
  );
};

export default ToolConstruction;
