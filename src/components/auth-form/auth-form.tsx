import React, { useState } from "react";
import { useForm } from "react-hook-form";
import styles from "./auth-form.module.scss";
import {
  faMailBulk,
  faRotate,
  faUserSecret,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AuthForm = ({ setAuth }: { setAuth: Function }) => {
  const [loading, setLoading] = useState(false);
  const { handleSubmit, reset, formState, register } = useForm({
    mode: "onChange",
  });
  const { isValid } = formState;
  const onSubmit = async (data: any, event: any) => {
    event.preventDefault();
    setLoading(true);
    await axios
      .post("/api/validateUser", data)
      .then((res) => {
        setLoading(false);
        console.log(res);
        if (res.data.role == "admin") {
          localStorage.setItem("userData", JSON.stringify(res.data));
          toast.success("Autenticado");
          setAuth(true);
        } else {
          toast.info("No tienes acceso a esta sección");
          reset();
        }
      })
      .catch((err) => {
        setLoading(false);
        if (err.response.status == 401) toast.error("Contraseña Incorrecta");
        else if (err.response.status == 404)
          toast.info("Usuario no encontrado");
      });
  };
  return (
    <>
      <h1 style={{ textAlign: "center" }}>
        Ingresa tus datos para acceder a esta información
      </h1>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <label>
          <h2>
            Correo
            <FontAwesomeIcon icon={faMailBulk} />
          </h2>
          <input {...register("email", { required: true })} type="text" />
        </label>
        <label>
          <h2>
            Contraseña
            <FontAwesomeIcon icon={faUserSecret} />
          </h2>
          <input
            {...register("password", { required: true })}
            type="password"
          />
        </label>
        <button disabled={!isValid} type="submit">
          {loading ? (
            <FontAwesomeIcon
              style={{ width: "1rem" }}
              className="spin"
              icon={faRotate}
            />
          ) : (
            "Enviar"
          )}
        </button>
      </form>
    </>
  );
};

export default AuthForm;
