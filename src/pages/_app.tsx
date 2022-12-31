import { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';
import Head from 'next/head';
import { MantineProvider, ColorScheme } from '@mantine/core';
import { mantineTheme } from 'mantine-theme';
import { Roboto } from '@next/font/google';
import MenuContextProvider from 'src/context/menu/menuContextProvider';
import { ProjectsContextProvider } from 'src/context/projects/projects-context-provider.component';
import { PageLoadContextProvider } from 'src/context/page-load-context-provider/page-load-context-provider';
import { HeroContextProvider } from 'src/context/hero/heroContextProvider';
import Layout from './layout';
import nextI18NextConfig from '../../next-i18next.config';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
});

function _App(props: AppProps & { colorScheme: ColorScheme }) {
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <title>Parametrik Engineering</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <meta name="description" content="Parametrik Engineering" />
        <meta
          name="keywords"
          content="tool, construction, automotive, OEM, metal, sheet, forming, simulation, method, company"
        />
        <meta name="author" content="Parametrik Engineering" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="nositelinkssearchbox" />
        <link rel="icon" type="image/x-icon" href="/icons/favicon.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png" />
        <link rel="manifest" href="/manifest.json" />
      </Head>

      <MantineProvider withGlobalStyles withNormalizeCSS theme={mantineTheme}>
        <PageLoadContextProvider>
          <HeroContextProvider>
            <ProjectsContextProvider projects={pageProps.projects || []}>
              <MenuContextProvider>
                <Layout className={roboto.className}>
                  <Component {...pageProps} />
                </Layout>
              </MenuContextProvider>
            </ProjectsContextProvider>
          </HeroContextProvider>
        </PageLoadContextProvider>
      </MantineProvider>
    </>
  );
}

export default appWithTranslation(_App, nextI18NextConfig);
