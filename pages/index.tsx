import type { NextPage } from "next";
import Head from "next/head";

import { useContext } from "react";

import Layout from "../layouts/layout";
import FirstSection from "../containers/firstSection/firstSection";
import Section from "../containers/section/section";
import LoadingScreen from "../containers/loadingScreen/loadingScreen";
import Logos from "../containers/logos/logos";
import logos from "../data/logos";
import Presentation from "../components/presentation/presentation";
import VideoLoadContext from "../context/videoLoad/videoLoad";

const Home: NextPage = () => {
  const { isFinished } = useContext(VideoLoadContext);

  return (
    <>
      <Head>
        <title>Parametrik Engineering</title>
      </Head>

      {isFinished ? (
        <Layout>
          <FirstSection>
            <Section>
              <h1>First section</h1>
            </Section>
          </FirstSection>
          <Section>
            <Presentation />
          </Section>
          <Section>
            <Logos title="Partners" data={logos} />
          </Section>
        </Layout>
      ) : (
        <LoadingScreen />
      )}
    </>
  );
};

export default Home;
