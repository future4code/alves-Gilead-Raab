import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useProtectedPage } from '../Hooks/useProtectedPage'
import {goToHomePage, goToTripDetails, goToCreateTrip, goToLogin } from '../Routes/Coordinator'
import { useParams } from 'react-router-dom'
import { Body, Button, HomeButtonsContainer, AdminPageContainer, TitleTripList, AdminTripContainer } from '../Components/Styled'

export const AdminHomePage = () => {
  const [trips, setTrips] = useState([])

  const navigate = useNavigate()
  const pathParams = useParams()

  const token = localStorage.getItem("token")
  
  useProtectedPage()


  useEffect(() => {
    getTripDetails()

  }, [])

  const getTripDetails = () => {
    axios
    .get ("https://us-central1-labenu-apis.cloudfunctions.net/labeX/gileadraab/trips")
    .then((response) => {
      setTrips(response.data.trips)
    })
    .catch((err) => {
      alert(err.response)
    })
  }

  const deleteTrip = (tripID) => {
    const id = tripID

    axios
    .delete (`https://us-central1-labenu-apis.cloudfunctions.net/labeX/gileadraab/trips/${id}`, {
      headers: {
        auth: token
      }
    })
    .then((response) => {
      getTripDetails()
      alert("Viagem deletada com sucesso")
    })
    .catch((err) => {
      alert("Ocorreu um erro ao tentar deletar esta viagem")
    })
  }

  const logout = (navigate) => {
      localStorage.removeItem('token')
      goToLogin(navigate)
  }
    

    const listTrips = trips.map(trip => {
    return <AdminTripContainer> <span onClick={()=> goToTripDetails(navigate, trip.id)}><b>{trip.name.toUpperCase()}</b></span><Button onClick={()=>deleteTrip(trip.id)}>Deletar viagem</Button></AdminTripContainer>

  })
  return (
    <Body>
      <AdminPageContainer>
        <TitleTripList>Painel Administrativo</TitleTripList>
        <HomeButtonsContainer>
          <Button onClick={()=> goToHomePage(navigate)}>Voltar</Button><Button onClick={()=> goToCreateTrip(navigate)}>Criar Viagem</Button><Button onClick={()=>logout(navigate)}>Logout</Button>
        </HomeButtonsContainer>
        {listTrips}

      </AdminPageContainer>

    </Body>
  )
}

