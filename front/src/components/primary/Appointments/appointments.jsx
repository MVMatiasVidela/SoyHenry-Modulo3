import { useEffect, useState } from "react";
import { Appointment } from "../../secundary";
import { getAppointmets } from "../../../helpers";
import styles from "./appointments.module.css";
import { useSelector } from "react-redux";

export default function Appointments(props) {
  const appointments = useSelector((state) => state.appointments);

  return (
    <div className={styles.appointmentsContainer}>
      {appointments.length > 0 ? (
        appointments.map(function (appointment) {
          return (
            <div className={styles.appointmentCard}>
            
              <Appointment
                key={appointment.id}
                id={appointment.id}
                date={appointment.date}
                time={appointment.time}
                description={appointment.description}
                status={appointment.status}
              />
            </div>
          );
        })
      ) : (
        <p>No hay appointments</p>
      )}
    </div>
  );
}
