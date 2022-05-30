import React from "react";
import { useForm } from "react-hook-form";
import styles from "./auth-form.module.scss";
import { faMailBulk, faUserSecret } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import Swal from "sweetalert2";

const AuthForm = ({ setAuth }: { setAuth: Function }) => {
  const { handleSubmit, reset, formState, register } = useForm({
    mode: "onChange",
  });
  const { isValid } = formState;
  const onSubmit = async (data: any, event: any) => {
    event.preventDefault();
    await axios
      .post("/api/validateUser", data)
      .then((res) => {
        console.log(res);
        if (res.data.role == "admin") {
          // localStorage.setItem("userData", JSON.stringify(res));
          setAuth(true);
          Swal.fire("Autenticado", "", "success");
        } else {
          Swal.fire("No tienes acceso a esta sección", "", "error");
          reset();
        }
      })
      .catch((err) => {
        if (err.response.status == 401)
          Swal.fire("Contraseña incorrecta", "", "error");
        else if (err.response.status == 404)
          Swal.fire("Usuario no encontrado", "", "info");
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
          Enviar
        </button>
      </form>
    </>
  );
};

export default AuthForm;
