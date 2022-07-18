import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { useMemo } from 'react'
import countryList from 'react-select-country-list'
import { useNavigate } from 'react-router'
import { goBack } from '../Routes/Coordinator'
import { Body, MainContainer, FormContainer, Field, TitleApplication, InputSelection, Input, InputApplication, ButtonApplication } from "../Components/Styled"

export const ApplicationFormPage = () => {
  const [trips, setTrips] = useState([])
  const [tripId, setTripId] = useState ("")
  const [name, setName] = useState("")
  const [age, setAge] = useState("")
  const [applicationText, setApplicationText] = useState("")
  const [profession, setProfession] = useState("")
  const [country, setCountry] = useState("")

  const navigate = useNavigate()

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

  const onChangeTripId = (event) => {
    setTripId(event.target.value)
  }

  const onChangeName = (event) => {
    setName(event.target.value)
  }

  const onChangeAge = (event) => {
    setAge(event.target.value)
  }

  const onChangeProfession = (event) => {
    setProfession(event.target.value)
  }

  const onChangeApplicationText = (event) => {
    setApplicationText(event.target.value)
  }

  const onChangeCountry = (event) => {
    setCountry(event.target.value)
  }

  const applyToTrip = () => {
    const body = {
      name: name,
      age: age,
      applicationText: applicationText,
      profession: profession,
      country: country
    }

    const id = tripId

    if (isNaN(age)){
      alert("O valor de 'idade' deve ser um número")

    } else {

      axios
      .post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/gileadraab/trips/${id}/apply`, body)
      .then ((response) => {
        alert("Aplicação enviada com sucesso!")
        setName("")
        setAge("")
        setApplicationText("")
        setProfession("")
        setCountry("")
      })
      .catch ((err) => {
        alert("Não foi possível completar sua inscrição, verifique os dados inseridos")
      })
    }
  }

  const tripSelection = trips.map(trip => {
    return <option key={trip.id} value={trip.id}>
      {trip.name}     
    </option>
  })

  const countryOptions = useMemo(() => countryList().getData(), [])
  
  const countrySelection = countryOptions.map(country => {
    return <option key={country.value} value={country.label}>
      {country.label}     
    </option>
  })

  return (
    <Body>
      <MainContainer>
        <FormContainer>
          <TitleApplication>INSCREVA-SE</TitleApplication>

          <Field>      
            <InputSelection
              name="choseTrip"
              id="trip-select"
              onChange={onChangeTripId}>
              <option>Escolha seu destino</option>
              {tripSelection}
            </InputSelection>
          </Field>
          <Field>      
            <Input 
            placeholder="Nome"
            value = {name}
            onChange={onChangeName}/>
          </Field>
          <Field>
            <Input 
            placeholder="Idade"
            value = {age}
            onChange={onChangeAge}/>
          </Field>
          <Field>
            <InputApplication placeholder="Texto de Candidatura"
            value = {applicationText}
            onChange={onChangeApplicationText}/>
          </Field>
          <Field>
            <Input placeholder="Profissão"
            value = {profession}
            onChange={onChangeProfession}/>
          </Field>
          <Field>
            <InputSelection
              name="choseCountry"
              id="country-select"
              onChange={onChangeCountry}>
              <option>País</option>
              {countrySelection}
            </InputSelection>
          </Field>
          <ButtonApplication onClick={applyToTrip}>Enviar</ButtonApplication>
          <ButtonApplication onClick={()=> goBack(navigate)}>Voltar</ButtonApplication>
        </FormContainer>
      </MainContainer>
    </Body>
  )
}
