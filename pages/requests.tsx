import { useEffect, useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Layout from "../src/components/layout";
import AuthForm from "../src/components/auth-form/auth-form";
import RequestsList from "../src/components/requests/requests-list";

const Requests: NextPage = () => {
  const [auth, setAuth] = useState({ authenticated: false, role: "" });
  useEffect(() => {
    const userData = localStorage.getItem("userData");
    if (userData) {
      if (JSON.parse(userData).role == "admin")
        setAuth({ authenticated: true, role: "admin" });
      else setAuth({ authenticated: true, role: "user" });
    }
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
          {auth.authenticated ? (
            <RequestsList setAuth={setAuth} />
          ) : (
            <AuthForm setAuth={setAuth} />
          )}
        </div>
      </Layout>
    </div>
  );
};

export default Requests;
