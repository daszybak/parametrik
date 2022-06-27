import type { NextPage } from "next";
import Head from "next/head";

import { useContext } from "react";

import Layout from "../layouts/layout";
import FirstSection from "../containers/firstSection/firstSection";
import Section from "../containers/section/section";
import LoadingScreen from "../containers/loadingScreen/loadingScreen";
import PageLoadContext from "../context/pageLoad/pageLoad";

const Home: NextPage = () => {
  const { isLoaded } = useContext(PageLoadContext);

  return (
    <>
      <Head>
        <title>Parametrik Engineering</title>
      </Head>
      <Layout>
        {isLoaded ? (
          <>
            <FirstSection>
              <Section>
                <h1>First Section</h1>
              </Section>
            </FirstSection>
            <Section>
              <h1>Second Section</h1>
            </Section>
          </>
        ) : (
          <LoadingScreen />
        )}
      </Layout>
    </>
  );
};

export default Home;
