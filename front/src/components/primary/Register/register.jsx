import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import styles from "./register.module.css";
import validate from "./validate";
import { postUserRegister } from "../../../helpers";
import { useNavigate, Link } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();

  function handleSubmit({
    name,
    email,
    birthdate,
    dni,
    username,
    password,
  }) {
    const user = { name, email, birthdate, dni, username, password };
    postUserRegister(user)
      .then((res) => {
        //navegar al login
        alert(res.message);
        navigate("/auth/login");
      })
      .catch((err) => console.error(err));
  }
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Register</h1>
      <Formik
        initialValues={{
          name: "",
          email: "",
          birthdate: "",
          dni: "",
          username: "",
          password: "",
          repeatPassword: "",
        }}
        validate={validate}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form className={styles.form}>
            <label htmlFor="name">Nombre</label>
            <Field name="name" type="text" className={styles.input} />
            <ErrorMessage
              name="name"
              component="div"
              className={styles.error}
            />

            <label htmlFor="email">Email</label>
            <Field name="email" type="email" className={styles.input} />
            <ErrorMessage
              name="email"
              component="div"
              className={styles.error}
            />

            <label htmlFor="birthdate">Fecha de nacimiento</label>
            <Field name="birthdate" type="date" className={styles.input} />
            <ErrorMessage
              name="birthdate"
              component="div"
              className={styles.error}
            />

            <label htmlFor="dni">DNI</label>
            <Field name="dni" type="number" className={styles.input} />
            <ErrorMessage name="dni" component="div" className={styles.error} />

            <label htmlFor="username">Nombre de usuario</label>
            <Field name="username" type="text" className={styles.input} />
            <ErrorMessage
              name="username"
              component="div"
              className={styles.error}
            />

            <label htmlFor="password">Contraseña</label>
            <Field name="password" type="password" className={styles.input} />
            <ErrorMessage
              name="password"
              component="div"
              className={styles.error}
            />

            <label htmlFor="repeatPassword">Repetir contraseña</label>
            <Field
              name="repeatPassword"
              type="password"
              className={styles.input}
            />
            <ErrorMessage
              name="repeatPassword"
              component="div"
              className={styles.error}
            />

            <button type="submit" className={styles.submitButton}>
              Registrar
            </button>
          </Form>
        )}
      </Formik>
      <p>¿Ya tienes cuenta?</p>
      <Link className={styles.nav} to="/auth/login">
        Iniciar seción
      </Link>
    </div>
  );
}
