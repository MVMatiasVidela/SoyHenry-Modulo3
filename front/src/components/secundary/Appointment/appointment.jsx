import React from "react";
import styles from "./appointment.module.css";
import { formatTime, formatDate } from "../../../utils";
import showSweetAlert from "../Modal/modal";
import { cancelAppointment, getUser } from "../../../helpers";
import { updateAppointments } from "../../../redux/slices";
import { useDispatch } from "react-redux";

export default function Appointment(appointment) {
  const dispatch = useDispatch ()
  let containerClass = styles.container;
  if (appointment.status === "ACTIVE") {
    containerClass += ` ${styles.containerActive}`;
  } else if (appointment.status === "CANCELLED") {
    containerClass += ` ${styles.containerCanceled}`;
  }

  const handleAccept = () => {
    cancelAppointment(appointment.id)
      .then((res) => {
        console.log(res);
        getUser(res.data.user.id).then((res)=>{
          console.log(res);
          dispatch(updateAppointments(res.appointments));
        });
      })
      .catch((err) => console.error(err));
  };

  const handleCancel = () => {
    console.log("Cancelar");
  };

  const handleClick = () => {
    if (appointment.status === "ACTIVE") {
      showSweetAlert({
        title: "¿Deseas cancelar la cita?",
        text: "Si cancelas la cita, no podrás recuperarla.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Aceptar",
        cancelButtonText: "Cancelar",
      }).then((result) => {
        if (result.isConfirmed) {
          handleAccept();
        } else {
          handleCancel();
        }
      });
    }
  };

  return (
    <div className={containerClass} onClick={handleClick}>
      <h2>{formatDate(appointment.date)}</h2>
      <p>{formatTime(appointment.time)}</p>
      <p>{appointment.description}</p>
      <p>{appointment.status}</p>
    </div>
  );
}
