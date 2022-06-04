import { faRotate } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import styles from "./request-form.module.scss";

const RequestForm = () => {
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, formState, reset } = useForm({
    mode: "onChange",
  });
  const { isValid } = formState;
  const onSubmit = async (data: any, ev: any) => {
    setLoading(true);
    ev.preventDefault();
    await axios
      .post("/api/requests", data)
      .then((res) => {
        toast.success("Petición envíada con éxito");
        reset();
        setLoading(false);
      })
      .catch((err) => {
        toast.error("Ocurrió un error envíando la petición");
        reset();
        setLoading(false);
      });
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
  );
};

export default RequestForm;
