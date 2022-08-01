import React from "react"
import { HeaderStyled, GoToPageLink, HR } from "../Styles/styled"
import labenuLogo from '../Images/labenu-logo.png'
import { useNavigate } from "react-router-dom"
import { goToLogin, logout } from "../Routes/Coordinator"


export const Header = () => {
  const token = localStorage.getItem("token")

  const navigate = useNavigate()

  return (
    <HeaderStyled>
      <img src={labenuLogo}/> {token == null ? <GoToPageLink onClick={() => goToLogin(navigate) }>Entrar</GoToPageLink> : <GoToPageLink onClick={() => logout(navigate) }>Sair</GoToPageLink>}
      <HR/>
    </HeaderStyled>
  )

}