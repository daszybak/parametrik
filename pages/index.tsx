import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Layout from "../layouts/layout";
import FirstSection from "../containers/firstSection/firstSection";
import Section from "../containers/section/section";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Parametrik Engineering</title>
      </Head>
      <Layout>
        <FirstSection>
          <Section>
            <h1>First Section</h1>
          </Section>
        </FirstSection>
        <Section>
          <h1>Second Section</h1>
        </Section>
      </Layout>
    </>
  );
};

export default Home;
