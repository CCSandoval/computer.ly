import { faRotate } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios, { AxiosError, AxiosResponse } from "axios";
import React, { useEffect, useState } from "react";
import { RequestData } from "../../interfaces";
import RequestCard from "./request-card";
import styles from "./requests.module.scss";
import { toast } from "react-toastify";

const RequestsList = ({ setAuth }: { setAuth: Function }) => {
  const [list, setList] = useState<Array<RequestData>>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get("/api/requests")
      .then((res: AxiosResponse) => {
        setList(res.data);
        setLoading(false);
      })
      .catch((err: AxiosError) => {
        toast.error("Ocurrió un error cargando las peticiones");
        setAuth(false);
      });
  }, []);
  return (
    <div className={styles.wrapper}>
      {loading ? (
        <FontAwesomeIcon
          style={{ width: "15%", marginTop: "1rem", color: "#44355b" }}
          className="spin"
          icon={faRotate}
        />
      ) : (
        list.map((req) => <RequestCard key={req._id} data={req} />)
      )}
    </div>
  );
};

export default RequestsList;
