import { StyleHeader } from "./style"
import { StyledMainContainer } from "../../styles/Container"

export const Header = () => {
  return (
    <StyleHeader>
      <StyledMainContainer>
        <img src="../../src/assets/logo.svg" alt="Logo Nu Kenzie nas cores rosa e preto" />
      </StyledMainContainer>
    </StyleHeader>
  )
}