import SectionTitle from '../section-title/section-title.component';
import Section from '../section/section.component';

interface OfficeProps {}

// eslint-disable-next-line max-len
const Office: React.FC<OfficeProps> = () => {
  const name = 'Office';

  return (
    <Section id={name}>
      <SectionTitle align="start">{name}</SectionTitle>
    </Section>
  );
};

export default Office;
