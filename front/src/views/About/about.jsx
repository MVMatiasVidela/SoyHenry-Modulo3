import imagen4Img from "../../assets/imagenes/imagen4.jpg";
import styles from "./about.module.css";
import imagen3Img from "../../assets/imagenes/imagen3.jpg";
export default function About() {
  return (
    <div className={styles.div}>
      <img className={styles.img} src={imagen4Img} alt="perritos" />
      <div className={styles.info}>
        <h1>Nuestra historia</h1>
        <p>
          En +VID VETERINARIA llevamos prestando servicios de cirugía y medicina
          para mascotas desde 1999, así como peluqueria y tienda especializada
          para tus animalitos mas queridos. Con tu primera consulta te llevas un
          regalo para tu mascotita y ademas la primera va gratis!
        </p>
        <div className={styles.info3}>
          <h3>Ven a conocer nuestra peluqueria canina</h3>
          <img className={styles.img3} src={imagen3Img} alt="img1" />
        </div>
      </div>
    </div>
  );
}
