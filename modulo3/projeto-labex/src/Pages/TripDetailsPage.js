import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { goBack } from '../Routes/Coordinator'
import { useProtectedPage } from '../Hooks/useProtectedPage'
import { useParams, useNavigate } from 'react-router-dom'
import { BodyTripsDetails, Button, HomeButtonsContainer, TitleTripList, TripContainer } from '../Components/Styled'

export const TripDetailsPage = () => {
  const [tripDetails, setTripDetails] = useState({})
  const [tripCandidates, setTripCandidates] = useState([])
  const [approvedCandidatesArray, setApprovedCandidatesArray] = useState([])

  useProtectedPage()

  const token = localStorage.getItem("token")

  const navigate = useNavigate()
  const params = useParams()

  useEffect(() => {
    getTripDetails()

  }, [])

  const getTripDetails = () => {
    const id = params.id

    axios
    .get (`https://us-central1-labenu-apis.cloudfunctions.net/labeX/gileadraab/trip/${id}`, {
      headers: {
        auth: token
      }
    })
    .then((response) => {
      setTripDetails(response.data.trip)
      setTripCandidates(response.data.trip.candidates)
      setApprovedCandidatesArray(response.data.trip.approved)
    })
    .catch((err) => {
      alert("Não foi possivel localizar esta viagem")
    })
  }

  const decideCandidate = (choice, candidate) => {
    const tripId = params.id
    const candidateId = candidate

    const body = {
      approve: choice
    }

    axios
    .put (`https://us-central1-labenu-apis.cloudfunctions.net/labeX/gileadraab/trips/${tripId}/candidates/${candidateId}/decide`, body, {
      headers: {
        auth: token
      }
    })
    .then((response) => {
      getTripDetails()
      alert(response.data.message)
 
    })
    .catch((err) => {
      getTripDetails()
      alert(err.response)
    })
  }

  const pendingCandidates = tripCandidates.map(candidate =>{
    return <TripContainer>
        <p>Nome: {candidate.name}</p>      
        <p>Idade: {candidate.age}</p>   
        <p>Profissão: {candidate.profession}</p>      
        <p>País: {candidate.country}</p>
        <p>Texto de Candidatura: {candidate.applicationText}</p> 
        <HomeButtonsContainer><Button onClick={()=>decideCandidate(false, candidate.id)}>Reprovar</Button><Button onClick={()=>decideCandidate(true, candidate.id)}>Aprovar</Button></HomeButtonsContainer>     
      </TripContainer>
  })

  const approvedCandidates = approvedCandidatesArray.map(candidate =>{
    return <p><h3>- {candidate.name.toUpperCase()}</h3></p>  
  })

  return (
    <BodyTripsDetails>
        <TitleTripList>Detalhes da Viagem</TitleTripList>
        <TripContainer>
          <p><h2>{tripDetails.name}</h2></p>
          <p>Descrição: {tripDetails.description}</p>
          <p>Planeta: {tripDetails.planet}</p>
          <p>Duração: {tripDetails.durationInDays} Dias</p>
          <p>Data: {tripDetails.date}</p>
        </TripContainer>

        <TitleTripList>Candidatos Pendentes</TitleTripList>

          {pendingCandidates} 


        <TitleTripList>Candidatos Aprovados</TitleTripList>

        <TripContainer>
          {approvedCandidates}
        </TripContainer>



        <p><Button onClick={()=>goBack(navigate)}>Voltar</Button></p>
        
        
    </BodyTripsDetails>
  )
}

