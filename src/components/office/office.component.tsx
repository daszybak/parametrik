import SectionTitle from '../section-title/section-title.component';
import Section from '../section/section.component';

interface OfficeProps {}

// eslint-disable-next-line max-len
const Office: React.FC<OfficeProps> = () => (
  <Section>
    <SectionTitle align="start">Office</SectionTitle>
  </Section>
);

export default Office;
