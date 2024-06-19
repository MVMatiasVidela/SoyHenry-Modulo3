import styles from"./appointments.module.css"
import { Appointments as Apps} from "../../components/primary";
import {Schedule} from "../../components/primary/index"
import { useSelector } from "react-redux";
import { useEffect } from "react";


export default function Appointments() {
   const userId = useSelector((state) => state.userId);
   console.log(userId);

   useEffect(() => {
     console.log(userId);
   }, [userId]);

  return (
    <div >
        <h1>BIENVENIDOS +VID veterinaria</h1>
      <div className={styles.Info}>
        {userId !== 0 ? (
          
          <Schedule />
        ) : (
          <p className={styles.p}>Debes iniciar sesión para agendar turnos</p>
        )}
      <div className={styles.vista}>
        <h1>Mis turnos:</h1>

        {userId !== 0 ? (
          <Apps />
        ) : (
          <p className={styles.p}>Debes iniciar sesión para agendar turnos</p>
        )}
      </div>
      </div>
    </div>
  );
   
}
