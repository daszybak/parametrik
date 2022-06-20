import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Layout from "../layouts/layout";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Parametrik Engineering</title>
      </Head>
      <Layout>
        <div>Home</div>
      </Layout>
    </>
  );
};

export default Home;
