import type { NextPage } from "next";
import Head from "next/head";
import Layout from "../src/components/layout";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Computer.ly | Home</title>
        <meta name="description" content="Computer.ly" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <p></p>
      </Layout>
    </div>
  );
};

export default Home;
