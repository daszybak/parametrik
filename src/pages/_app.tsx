import { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';
import Head from 'next/head';
import { MantineProvider, ColorScheme } from '@mantine/core';
import { mantineTheme } from 'mantine-theme';
import MenuContextProvider from 'src/context/menu/menuContextProvider';
import { ProjectsContextProvider } from 'src/context/projects/projects-context-provider.component';
import { PageLoadContextProvider } from 'src/context/page-load-context-provider/page-load-context-provider';
import Layout from './layout';
import nextI18NextConfig from '../../next-i18next.config';

function _App(props: AppProps & { colorScheme: ColorScheme }) {
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <title>Parametrik Engineering</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <link rel="shortcut icon" href="/favicon.svg" />
      </Head>

      <MantineProvider withGlobalStyles withNormalizeCSS theme={mantineTheme}>
        <PageLoadContextProvider>
          <ProjectsContextProvider projects={pageProps.projects || []}>
            <MenuContextProvider>
              <Layout>
                <Component {...pageProps} />
              </Layout>
            </MenuContextProvider>
          </ProjectsContextProvider>
        </PageLoadContextProvider>
      </MantineProvider>
    </>
  );
}

export default appWithTranslation(_App, nextI18NextConfig);
