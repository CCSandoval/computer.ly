/* eslint-disable @next/next/no-img-element */
import React from "react";
import { useRouter } from "next/router";
import styles from "./header.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComputer,
  faCodeCommit,
  faMoneyBill,
  faDatabase,
} from "@fortawesome/free-solid-svg-icons";

const Header: React.FC = () => {
  const router = useRouter();
  return (
    <>
      <div className={styles.headerBackground}>
        <img src="/images/logo.png" alt="logo" />
      </div>
      <nav className={styles.navbar}>
        <button onClick={() => router.push("/")}>
          <FontAwesomeIcon icon={faComputer} />
          Reservar un equipo
        </button>
        <button onClick={() => router.push("/requests")}>
          <FontAwesomeIcon icon={faCodeCommit} />
          Revisar solicitudes
        </button>
        <button onClick={() => router.push("/computers/")}>
          <FontAwesomeIcon icon={faDatabase} />
          Administrar equipos
        </button>
        <button onClick={() => router.push("/buy")}>
          <FontAwesomeIcon icon={faMoneyBill} />
          Comprar una subscripción
        </button>
      </nav>
    </>
  );
};

export default Header;
