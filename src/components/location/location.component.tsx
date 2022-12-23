import { useRef } from 'react';
import GlobeGL, { GlobeMethods } from 'react-globe.gl';
import { Flex, useMantineTheme } from '@mantine/core';
import { useViewportSize } from '@mantine/hooks';
import SectionTitle from '../section-title/section-title.component';
import Section from '../section/section.component';

interface LocationProps {}

// eslint-disable-next-line max-len
const Location: React.FC<LocationProps> = () => {
  const name = 'Location';
  const { width } = useViewportSize();
  const theme = useMantineTheme();
  const globeEl = useRef<GlobeMethods | undefined>();

  let Globe: typeof GlobeGL = () => null;
  // eslint-disable-next-line global-require
  if (typeof window !== 'undefined') Globe = require('react-globe.gl').default;

  return (
    <Section id={name}>
      <SectionTitle align="center">{name}</SectionTitle>
      <Flex justify="center">
        <Globe
          ref={globeEl}
          globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
          backgroundColor={theme.colors.gray[0]}
          width={width * 0.8}
          onGlobeReady={() => {
            globeEl.current?.pointOfView({ lat: 45.1, lng: 15.2, altitude: 1.8 }, 5000);
            const controls = globeEl.current?.controls();
            if (controls) {
              controls.enableZoom = false;
            }
          }}
          //@ts-ignore
          labelLat={(d) => d.latitude}
          //@ts-ignore
          labelLng={(d) => d.longitude}
          //@ts-ignore
          labelText={(d) => d.name}
          //@ts-ignore
          labelSize={1.2}
          //@ts-ignore
          labelDotRadius={0.5}
          labelColor="#FF0000"
          labelResolution={2}
          labelsData={[
            {
              name: 'Zagreb',
              latitude: 45.815,
              longitude: 15.9819,
            },
          ]}
        />
      </Flex>
    </Section>
  );
};

export default Location;
