import { StyleHeader } from "./style"
import { StyledMainContainer } from "../../styles/Container"

import Logo from "../../assets/logo.svg"

export const Header = () => {
  return (
    <StyleHeader>
      <StyledMainContainer>
        <img src={Logo} alt="Logo Nu Kenzie nas cores rosa e preto" />
      </StyledMainContainer>
    </StyleHeader>
  )
}