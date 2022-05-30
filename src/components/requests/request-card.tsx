import React from "react";
import { RequestData } from "../../interfaces";
import styles from "./requests.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";

interface RequestCardProps {
  data: RequestData;
}

const RequestCard: React.FC<RequestCardProps> = ({ data }) => {
  return (
    <div className={styles.card}>
      <p style={{ position: "absolute", top: "0" }}>
        <span>Radicado: {data._id}</span>
      </p>
      <div className={styles.cardSection}>
        <h2>Información del cliente</h2>
        <p>
          <span>
            Nombre: <b>{data.name}</b>
          </span>
        </p>
        <p>
          <span>
            Edad: <b>{data.age}</b>
          </span>
        </p>
        <p>
          <span>
            Identificación: <b>{data.identification}</b>
          </span>
        </p>
        <p>
          <span>
            Email:{" "}
            <a target="_blank" rel="noreferrer" href={`mailto:${data.email}`}>
              {data.email}
            </a>
          </span>
        </p>
        <p>
          <span>
            Teléfono: <b>{data.celNumber}</b>
          </span>
        </p>
        <p>
          <span>
            Centro de formación: <b>{data.senaCenter}</b>
          </span>
        </p>
        {data.formation && (
          <p>
            <span>Formación: {data.formation}</span>
          </p>
        )}
      </div>
      <div className={styles.actionsWrapper}>
        <div>
          <FontAwesomeIcon icon={faCircleCheck} style={{ color: "green" }} />
          <p>Aprobar</p>
        </div>
        <div>
          <FontAwesomeIcon icon={faCircleXmark} style={{ color: "red" }} />
          <p>Rechazar</p>
        </div>
      </div>
      <div className={styles.cardSection}>
        <h2>Información de la petición</h2>
        <p>
          <span>Estado: {data.status}</span>
        </p>
        <p>
          <span>Mensaje: {data.message}</span>
        </p>
      </div>
    </div>
  );
};

export default RequestCard;
