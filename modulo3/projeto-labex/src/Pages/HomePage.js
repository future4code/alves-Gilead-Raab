import React from 'react'
import { useNavigate } from 'react-router-dom'
import { goToLogin, goToTrips } from '../Routes/Coordinator'
import { Body, Title, HomeContainer, HomeButtonsContainer, Button } from '../Components/Styled'

export const HomePage = () => {
  const navigate = useNavigate()


  return (
    <Body>
      <HomeContainer>
        <Title>LABEX</Title>
        <HomeButtonsContainer>
          <Button onClick={()=> goToTrips(navigate)}>VER VIAGENS</Button>
          <Button onClick={()=> goToLogin(navigate)}>ÁREA DE ADMIN</Button>
        </HomeButtonsContainer>
      </HomeContainer>
    </Body>
  )
}

