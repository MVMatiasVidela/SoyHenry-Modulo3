import {StyledButton} from "./buttonNav.styled"



export default function ButtonNav({ to, children }) {
  return <StyledButton href={to}>{children}</StyledButton>
}
  