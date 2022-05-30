import axios, { AxiosError, AxiosResponse } from "axios";
import React, { useEffect, useState } from "react";
import { RequestData } from "../../interfaces";

const RequestsList = () => {
  const [list, setList] = useState<Array<RequestData>>([]);
  useEffect(() => {
    axios
      .get("/api/requests")
      .then((res: AxiosResponse) => setList(res.data))
      .catch((err: AxiosError) => console.log(err.message));
  }, []);
  return (
    <div>
      {list.map((req) => (
        <div key={req._id}>
          {req.name}
          {req.age}
        </div>
      ))}
    </div>
  );
};

export default RequestsList;
