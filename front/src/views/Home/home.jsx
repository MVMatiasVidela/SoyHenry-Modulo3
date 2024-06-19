import styles from "./home.module.css";
import portadaImg from "../../assets/imagenes/portada.png";
import imagen2Img from "../../assets/imagenes/imagen2.jpg"
import imagenFondo1Img from "../../assets/imagenes/imagenFondo1.jpg";

export default function Home() {
  return (
    <div>
      <div className={styles.contPortada}>
        <img className={styles.imgPortada} src={portadaImg} alt="portada" />
      </div>

      <div className={styles.info1}>
        <div>
          <img className={styles.img1} src={imagen2Img} alt="img1" />
        </div>
        <div>
          <h2>Tu centro veterinario de confianza esta aqui</h2>
          <p>
            Bienvenidos a Clínica Veterinaria Mas VID, un centro dedicado a
            ofrecer la mejor atención médica y el cuidado más amoroso para tus
            mascotas. Ubicados en el corazón de la ciudad, nuestro objetivo es
            garantizar la salud y el bienestar de tus compañeros animales
            mediante servicios veterinarios integrales, tecnología de punta y un
            equipo de profesionales altamente cualificados.
          </p>
        </div>
      </div>
      <hr />
      <div className={styles.info2}>
        <div>
          <h2>Nuestra misión</h2>
          <p>
            En Clínica Veterinaria Mas VID, creemos que las mascotas son
            miembros de la familia. Nuestra misión es proporcionar una atención
            médica excepcional y compasiva que mantenga a tus mascotas
            saludables y felices durante toda su vida.
          </p>
        </div>
        <div>
          <img className={styles.img2} src={imagenFondo1Img} alt="img1" />
        </div>
      </div>
        <hr />
    </div>
  );
}
