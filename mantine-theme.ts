import {
  ContainerStylesParams,
  MantineTheme,
  MantineThemeOverride,
  TitleStylesParams,
} from '@mantine/core';

export const mantineTheme: MantineThemeOverride = {
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
      '#66cbc4',
      '#4dc3ba',
      '#33bab1',
      '#1ab2a7',
      '#00a99d',
      '#00988d',
      '#00877e',
      '#00766e',
      '#00655e',
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
  fontFamily: 'Roboto',
  defaultGradient: {
    from: '#e9b7ce',
    to: '#d3f3f1',
    deg: 45,
  },
  headings: {
    sizes: {
      h1: {
        // 36px in rem
        fontSize: '2.25rem',
        // 45px in rem
        lineHeight: '2.8125rem',
      },
      h2: {
        // 32px in rem
        fontSize: '2rem',
        // 32 * 1.2 in rem
        lineHeight: '2.4rem',
      },
      h3: {
        // 19px in rem
        fontSize: '1.1875rem',
        // 23px in rem
        lineHeight: '1.4375rem',
      },
      h4: {
        // 18px in rem
        fontSize: '1.125rem',
        // 22px in rem
        lineHeight: '1.375rem',
      },
    },
  },
  fontSizes: {
    xl: 24,
    lg: 18,
    md: 15,
    sm: 14,
    xs: 14,
  },
  components: {
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
        },
      }),
    },
  },
};
