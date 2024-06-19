import React, { useEffect, useState } from "react";
import profileImg from "../../../assets/profile.svg";
import {
  ProfileContainer,
  ProfileImage,
  Modal,
  StyledButton,
} from "./prfileButton.styled";
import {Link, useNavigate, } from "react-router-dom"
import {userLogout} from "../../../redux/slices"
import { useDispatch, useSelector } from "react-redux";
import styles from "./profileButton.module.css"

export default function ProfileButton() {
  //const [localId, setLocalId] = useState("")
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const dispatch = useDispatch()
  const navigate = useNavigate()

const userId = useSelector((state) => state.userId)

  const handleModal = () => {
    setModalIsOpen(!modalIsOpen);
    /*setTimeout(() => {
      //localStorage.removeItem("userId")
      console.log("deslogueo exitoso")
    }, 1000);*/
    
  };

  const handleLogOut = () => {
    setModalIsOpen(!modalIsOpen);
    navigate("/")
    dispatch(userLogout());
  }

   /*useEffect(() => {
   setLocalId(localStorage.getItem("userId"))
   }, []);*/


  return (
    <ProfileContainer onClick={handleModal}>
      <p className={styles.p}>Mi cuenta</p>
      <ProfileImage src={profileImg} alt="Profil log" />
      <Modal open={modalIsOpen}>
        {userId !== 0 ? (
          <>
            <Link to="/appointments">
              <StyledButton onClick={handleModal}>Mis turnos</StyledButton>
            </Link>

            <StyledButton onClick={handleLogOut}>Cerrar seión</StyledButton>
          </>
        ) : (
          <>
            <Link to="/auth/login">
              <StyledButton onClick={handleModal}>Iniciar sesión</StyledButton>
            </Link>
            <Link to="/auth/register">
              <StyledButton onClick={handleModal}>Registrarse</StyledButton>
            </Link>
            <Link to="/appointments">
              <StyledButton onClick={handleModal}>Mis turnos</StyledButton>
            </Link>
          </>
        )}
      </Modal>
    </ProfileContainer>
  );
}
