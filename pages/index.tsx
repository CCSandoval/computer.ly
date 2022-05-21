import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <div className="bg-red-700">
      <Head>
        <title>Computer.ly | Home</title>
        <meta name="description" content="Computer.ly" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <p className="text-3xl">Damn</p>
    </div>
  );
};

export default Home;
