import React from "react";
import { Link } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from "formik";
import styles from "./login.module.css";
import validations from "./validate";
import { postUserLogin } from "../../../helpers";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUserId, updateAppointments } from "../../../redux/slices";
export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleSubmit({ username, password }) {
    postUserLogin({ username, password })
      .then((res) => {
        alert(res.message);
        localStorage.setItem("userId", res.user.id);
        dispatch(setUserId(res.user.id));
        dispatch(updateAppointments(res.user.appointments));
        navigate("/appointments");
      })
      .catch((err) => console.error(err));
  }

  return (
    <div className={styles.container}>
      <h1>Iniciar sesión</h1>
      <Formik
        initialValues={{
          username: "",
          password: "",
          repeatPassword: "",
        }}
        validationSchema={validations}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form className={styles.form}>
            <label htmlFor="username">Nombre de usuario</label>
            <Field name="username" type="text" className={styles.input} />
            <ErrorMessage
              name="usernaname"
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
              type="Password"
              className={styles.input}
            />
            <ErrorMessage
              name="repeatPassword"
              component="div"
              className={styles.error}
            />

            <button type="submit" className={styles.submitButton}>
              Iniciar seción
            </button>
          </Form>
        )}
      </Formik>
      <p>¿No estas registrado?</p>
      <Link className={styles.nav} to="/auth/register">
        Registrarse
      </Link>
    </div>
  );
}
