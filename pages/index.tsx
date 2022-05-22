import type { NextPage } from "next";
import Head from "next/head";
import Layout from "../src/components/layout";
import RequestForm from "../src/components/request-form/request-form";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Computer.ly | Home</title>
        <meta name="description" content="Computer.ly" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div>
          <h2 style={{ textAlign: "center" }}>
            Ingresa tu información y nos comunicaremos contigo
          </h2>
          <RequestForm />
        </div>
      </Layout>
    </div>
  );
};

export default Home;
