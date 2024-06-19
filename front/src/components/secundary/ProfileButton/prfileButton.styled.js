import styled from "styled-components";

export const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  margin:0 2em 0 0;
`;

export const ProfileImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

export const Modal = styled.div`
  position: absolute;
  top: 50px;
  right: 0;
  margin: 1em 3em;
  background: gray;
  border: 2px solid #72a9e0;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 16px;
  display: ${(props) => (props.open ? "block" : "none")};
`;

export const StyledButton = styled.button`
  display: block;
  width: 100%;
  padding: 8px 16px;
  margin: 1em 0;
  border: none;
  border-radius: 4px;
  background-color: #001139;
  color: white;
  cursor: pointer;
  transition: 0.5s;

  &:hover {
    background-color: #74ccfb;
  }
`;
