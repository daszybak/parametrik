import {
  ContainerStylesParams,
  MantineTheme,
  MantineThemeOverride,
  TitleStylesParams,
} from '@mantine/core';

export const mantineTheme: MantineThemeOverride = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  globalStyles: (theme: MantineTheme) => ({
    body: {
      overflowX: 'hidden',
    },
  }),
  colors: {
    blue: [
      '#8290a2',
      '#687a8f',
      '#4f647c',
      '#364d69',
      '#042144',
      '#041e3d',
      '#031a36',
      '#021429',
      '#021122',
    ],
    green: [
      '#d6e5e5',
      '#adcbca',
      '#84b2b0',
      '#5b9895',
      '#327E7B',
      '#286562',
      '#193f3e',
      '#0f2625',
      '#050d0c',
    ],
    gold: [
      '#B3860A',
      '#B3860A',
      '#B3860A',
      '#B3860A',
      '#B3860A',
      '#B3860A',
      '#B3860A',
      '#B3860A',
      '#B3860A',
      '#B3860A',
    ],
  },
  black: '#042144',
  white: '#fff',
  fontFamily: 'Roboto, sans-serif',
  defaultGradient: {
    from: '#e9b7ce',
    to: '#d3f3f1',
    deg: 45,
  },
  headings: {
    fontFamily: 'Roboto, sans-serif',
    sizes: {
      h1: {
        // 36px in rem
        fontSize: '2.25rem',
        // 45px in rem
      },
      h2: {
        // 32px in rem
        fontSize: '2rem',
        // 32 * 1.2 in rem
      },
      h3: {
        // 19px in rem
        fontSize: '1.575rem',
        // 23px in rem
      },
      h4: {
        // 18px in rem
        fontSize: '1.255rem',
        // 22px in rem
        fontWeight: 500,
      },
    },
  },
  fontSizes: {
    xl: 24,
    lg: 20,
    md: 18,
    sm: 16,
    xs: 14,
  },
  components: {
    Button: {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      styles: (theme: MantineTheme) => ({
        label: {
          letterSpacing: '0.1em',
          fontSize: '1.125rem',
        },
      }),
    },
    Container: {
      styles: (theme: MantineTheme, params: ContainerStylesParams) => ({
        root: {
          padding: params.fluid ? '0 4.5rem' : '0 1rem',
        },
      }),
    },
    Title: {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      styles: (theme: MantineTheme, params: TitleStylesParams) => ({
        root: {
          textTransform: 'uppercase',
          letterSpacing: '0.05em',
        },
      }),
    },
  },
};
