import styled from "styled-components";

export const StyledButton = styled.a`
  color: white;
  text-decoration: none;
  margin: 0 1rem;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  background-color: #007bff;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
    text-decoration: underline;
  }

  &:active {
    background-color: #004085;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.5);
  }
`;
