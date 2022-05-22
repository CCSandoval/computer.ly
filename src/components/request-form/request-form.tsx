import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { RequestData } from "../../interfaces";
import styles from "./request-form.module.scss";

const RequestForm = () => {
  const { register, handleSubmit, formState } = useForm({ mode: "onChange" });
  const { isValid } = formState;
  const onSubmit = async (data, ev) => {
    ev.preventDefault();
    console.log(data);
    await axios
      .post("/api/requests", data)
      .then((res) => console.log(res))
      .catch((err) => console.error(err));
  };
  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <label>
        Nombre
        <input type="text" {...register("name", { required: true })} />
      </label>
      <label>
        Nº Identificación
        <input
          type="text"
          {...register("identification", { required: true })}
        />
      </label>
      <label>
        Mensaje
        <textarea {...register("message", { required: true })} />
      </label>
      <label>
        Email
        <input type="text" {...register("email", { required: true })} />
      </label>
      <label>
        Edad
        <input type="number" {...register("age", { required: true })} />
      </label>
      <label>
        Número de teléfono
        <input type="text" {...register("celNumber", { required: true })} />
      </label>
      <label>
        Centro Sena
        <input type="text" {...register("senaCenter", { required: true })} />
      </label>
      <label>
        Fecha
        <input type="date" {...register("date", { required: true })} />
      </label>
      <label>
        Formación
        <input type="text" {...register("formation")} />
      </label>
      <button type="reset">Limpiar</button>
      <span></span>
      <button disabled={!isValid} type="submit">
        Enviar
      </button>
    </form>
  );
};

export default RequestForm;
