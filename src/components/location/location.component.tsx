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
    <Section
      id={name}
      last
      style={{
        backgroundColor: theme.colors.gray[0],
        paddingTop: '2rem',
      }}
    >
      <SectionTitle align="center">{name}</SectionTitle>
      <Flex justify="center">
        <Globe
          ref={globeEl}
          globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
          backgroundColor={theme.colors.gray[0]}
          width={width}
          onGlobeReady={() => {
            // eslint-disable-next-line max-len
            globeEl.current?.pointOfView(
              { lat: 45.1, lng: 15.2, altitude: width < 1000 ? 3 : 1.8 },
              5000
            );
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
          labelSize={1.4}
          //@ts-ignore
          labelDotRadius={0.5}
          labelColor={() => '#fff'}
          labelResolution={3}
          labelsData={[
            {
              name: 'Zagreb, Croatia',
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
