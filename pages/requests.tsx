import { useEffect } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Layout from "../src/components/layout";
import axios, { AxiosError, AxiosResponse } from "axios";

const Home: NextPage = () => {
  useEffect(() => {
    axios
      .get("/api/requests")
      .then((res: AxiosResponse) => console.log(res.data))
      .catch((err: AxiosError) => console.log(err.message));
  }, []);
  return (
    <div>
      <Head>
        <title>Computer.ly | Requests</title>
        <meta name="description" content="Computer.ly" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div></div>
      </Layout>
    </div>
  );
};

export default Home;
