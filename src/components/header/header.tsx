/* eslint-disable @next/next/no-img-element */
import React from "react";
import { useRouter } from "next/router";
import styles from "./header.module.scss";

const Header: React.FC = () => {
  const router = useRouter();
  return (
    <>
      <div className={styles.headerBackground}>
        <img src="/images/logo.png" alt="logo" />
      </div>
      <nav className={styles.navbar}>
        <button onClick={() => router.push("/a")}>Reservar un equipo</button>
        <button onClick={() => router.push("/a")}>Revisar solicitudes</button>
        <button onClick={() => router.push("/a")}>
          Comprar una subscripción
        </button>
      </nav>
    </>
  );
};

export default Header;
