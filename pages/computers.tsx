import { useEffect, useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Layout from "../src/components/layout";
import AuthForm from "../src/components/auth-form/auth-form";
import RequestsList from "../src/components/requests/requests-list";

const Computers: NextPage = () => {
  const [auth, setAuth] = useState({ authenticated: false, role: "" });
  useEffect(() => {
    const userData = localStorage.getItem("userData");
    if (userData && JSON.parse(userData).role == "admin")
      setAuth({ authenticated: true, role: "admin" });
  }, []);
  return (
    <div>
      <Head>
        <title>Computer.ly | Computers</title>
        <meta name="description" content="Computer.ly" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div>
          {auth.authenticated ? (
            <p>autenticado</p>
          ) : (
            <AuthForm onlyAdmin={true} setAuth={setAuth} />
          )}
        </div>
      </Layout>
    </div>
  );
};

export default Computers;
