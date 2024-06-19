import imageImg from "../../../assets/imagenes/imgPrincipal.avif";
import styles from "./imgPrincipal.module.css";

export default function ImgPrincipal() {
  return (
    <div className={styles.contenedor}>
      
      <div className={styles.marca}>
        <h1 className={styles.h1}>+VID Veterinaria</h1>
        <p className={styles.p}>centro veterinario</p>
      </div>

      <div className={styles.contImg}>
        <img className={styles.img} src={imageImg} alt="perritos" />
      </div>
    
    </div>
  );
}
