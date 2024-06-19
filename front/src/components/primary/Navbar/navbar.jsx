import {Link} from "react-router-dom"
import { ProfileButton } from "../../secundary";
import vidImg from "../../../../public/vid.svg";

import styles from "./navbar.module.css"

export default function Navbar() {
  return (
    <header className={styles.navbar}>
      <div className={styles.Emp}>
        <img src={vidImg} className={styles.img} alt="Veterinaria" />
        <div>
          <h1 className={styles.h1}>+VID Veterinaria</h1>
          <p className={styles.p}>centro veterinario</p>
        </div>
      </div>

      <div className={styles.contNav}>
        <div className={styles.nav}>
          <Link className={styles.link} to="/">
            Inicio
          </Link>
        </div>
        <div className={styles.nav}>
          <Link className={styles.link} to="/">
            Contacto
          </Link>
        </div>
        <div className={styles.nav}>
          <Link className={styles.link} to="/about">
            Sobre nosotros
          </Link>
        </div>
      </div>

      <div>
        <ProfileButton />
      </div>
    </header>
  );
}
