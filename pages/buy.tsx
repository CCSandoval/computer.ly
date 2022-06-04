import type { NextPage } from "next";
import Head from "next/head";
import Layout from "../src/components/layout";
import { faWarning } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Buy: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Computer.ly | Buy</title>
        <meta name="description" content="Computer.ly" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <FontAwesomeIcon
            style={{ color: "red", width: "25%" }}
            icon={faWarning}
          />
          <h1 style={{ margin: "0" }}>¡Proximamente!</h1>
        </div>
      </Layout>
    </div>
  );
};

export default Buy;
