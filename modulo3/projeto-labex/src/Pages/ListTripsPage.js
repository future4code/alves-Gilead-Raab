import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import axios from 'axios'
import { goBack, goToApplicationForm } from '../Routes/Coordinator'
import { Body, TripListContainer, TripContainer, Button, TripButtonsContainer, TitleTripList } from '../Components/Styled'


export const ListTripsPage = () => {
  const [trips, setTrips] = useState([])
  

  useEffect(() => {
    axios
    .get ("https://us-central1-labenu-apis.cloudfunctions.net/labeX/gileadraab/trips")
    .then((response) => {
      setTrips(response.data.trips)
    })
    .catch((err) => {
      alert(err.response)
    })

  }, [])

  const navigate = useNavigate()


  const listTrips = trips.map(trip => {
    return <TripContainer>
      <p><b>Nome:</b> {trip.name}</p>      
      <p><b>Descrição:</b> {trip.description}</p>      
      <p><b>Planeta:</b> {trip.planet}</p>      
      <p><b>Duração:</b> {trip.durationInDays}</p>     
      <p><b>Data:</b> {trip.date}</p>
    </TripContainer>
  })


  return (
    <Body>

      <TripButtonsContainer>
        <Button onClick={() => goBack(navigate)}>VOLTAR</Button>
        <Button onClick={() => goToApplicationForm(navigate)}>INSCREVER-SE</Button>
      </TripButtonsContainer>

      <TitleTripList>Lista de Viagens</TitleTripList>

      {listTrips}
    </Body>
  )
}
