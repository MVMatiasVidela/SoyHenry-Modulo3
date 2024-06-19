import React, { useState } from "react";
import styles from "./schedule.module.css";
import validateAppointment from "./validate";
import { postAppointment } from "../../../helpers";
import { useDispatch, useSelector } from "react-redux";
import { updateAppointments } from "../../../redux/slices";

export default function Schedule() {
  const dispatch = useDispatch();

  const userId = useSelector((state) => state.userId);

  const [appointment, setAppointment] = useState({
    date: "",
    time: "",
    description: "",
  });

  const [errors, setErrors] = useState({
    date: "",
    time: "",
    description: "",
  });

  function handleChange(e) {
    const newAppointment = { ...appointment, [e.target.name]: e.target.value };
    setAppointment(newAppointment);
    const validationErrors = validateAppointment(newAppointment);
    setErrors({ ...validationErrors });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (Object.keys(errors).length === 0) {
      postAppointment(appointment, userId)
        .then((res) => {
          alert(res.message);
          dispatch(
            updateAppointments([
              ...res.data.user.appointments,
              {
                status:res.data.status,
                time: res.data.time,
                date: res.data.date,
                description: res.data.description,
                id: res.data.id,
              },
            ])
          );
          setAppointment({
            date: "",
            time: "",
            description: "",
          });
        })
        .catch((err) => alert(err.message));
    } else {
      alert("Fatlta rellenar campos");
    }
  }

  return (
    <div className={styles.container}>
      <h2>Pedir cita</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label>
          Date:
          <input
            type="date"
            name="date"
            value={appointment.date}
            onChange={handleChange}
            className={styles.input}
          />
          <p className={styles.error}>{errors.date}</p>
        </label>

        <label>
          Time:
          <input
            type="time"
            name="time"
            value={appointment.time}
            onChange={handleChange}
            className={styles.input}
          />
          <p className={styles.error}>{errors.time}</p>
        </label>

        <label>
          Description:
          <textarea
            name="description"
            value={appointment.description}
            onChange={handleChange}
            className={styles.input}
          />
          <p className={styles.error}>{errors.description}</p>
        </label>

        <div className={styles.buttons}>
          <button type="button" className={styles.cancButton}>
            Cancel
          </button>
          <button type="submit" className={styles.subButton}>
            Crear Appointment
          </button>
        </div>
      </form>
    </div>
  );
}
