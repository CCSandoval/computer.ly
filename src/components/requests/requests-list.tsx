import axios, { AxiosError, AxiosResponse } from "axios";
import React, { useEffect, useState } from "react";
import { RequestData } from "../../interfaces";
import RequestCard from "./request-card";
import styles from "./requests.module.scss";

const RequestsList = () => {
  const [list, setList] = useState<Array<RequestData>>([]);
  useEffect(() => {
    axios
      .get("/api/requests")
      .then((res: AxiosResponse) => setList(res.data))
      .catch((err: AxiosError) => console.log(err.message));
  }, []);
  return (
    <div className={styles.wrapper}>
      {list.map((req) => (
        <RequestCard key={req._id} data={req} />
      ))}
    </div>
  );
};

export default RequestsList;
