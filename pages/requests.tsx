import { useEffect, useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Layout from "../src/components/layout";
import AuthForm from "../src/components/auth-form/auth-form";
import RequestsList from "../src/components/requests/requests-list";

const Home: NextPage = () => {
  const [adminAuth, setAdminAuth] = useState(false);
  useEffect(() => {
    const userData = localStorage.getItem("userData");
    if (userData) setAdminAuth(true);
  }, []);
  return (
    <div>
      <Head>
        <title>Computer.ly | Requests</title>
        <meta name="description" content="Computer.ly" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div>
          {adminAuth ? (
            <RequestsList setAuth={setAdminAuth} />
          ) : (
            <AuthForm setAuth={setAdminAuth} />
          )}
        </div>
      </Layout>
    </div>
  );
};

export default Home;
