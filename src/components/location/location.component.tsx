import SectionTitle from '../section-title/section-title.component';
import Section from '../section/section.component';

interface LocationProps {}

// eslint-disable-next-line max-len
const Location: React.FC<LocationProps> = () => {
  const name = 'Location';

  return (
    <Section id={name}>
      <SectionTitle align="center">{name}</SectionTitle>
    </Section>
  );
};

export default Location;
