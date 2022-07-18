import React from 'react'
import { useProtectedPage } from '../Hooks/useProtectedPage'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { goBack } from '../Routes/Coordinator'
import { Body, ButtonApplication, Field, FormContainer, Input, InputApplication, InputSelection, MainContainer, TitleApplication } from '../Components/Styled'

export const CreateTripPage = () => {
  const allPlanets = [
    {name: "Mercúrio"}, 
    {name:"Vênus"}, 
    {name: "Terra"}, 
    {name: "Marte"}, 
    {name: "Júpiter"}, 
    {name: "Saturno"}, 
    {name: "Urano"}, 
    {name: "Netuno"}
  ]
  
  const [name, setName] = useState("")
  const [planet, setPlanet] = useState("")
  const [date, setDate] = useState("")
  const [description, setDescription] = useState("")
  const [duration, setDuration] = useState("")

  const token = localStorage.getItem("token")

  useProtectedPage()

  const navigate = useNavigate()

  const onChangeName = (event) => {
    setName(event.target.value)
  }

  const onChangePlanet = (event) => {
    setPlanet(event.target.value)
  }

  const onChangeDate = (event) => {
    setDate(event.target.value)
  }

  const onChangeDescription = (event) => {
    setDescription(event.target.value)
  }

  const onChangeDuration = (event) => {
    setDuration(event.target.value)
  }

  const PlanetSelection = allPlanets.map(planet => {
    return <option value={planet.name}>
      {planet.name}     
    </option>
  })

  const createTrip = () => {
    const body = {
      name: name,
      planet: planet,
      date: date,
      description: description,
      durationInDays: duration
    }

    if(isNaN(duration)){

      alert("O tempo de duração deve ser um número")

    } else {

      axios
      .post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/gileadraab/trips`, body, {
        headers: {
          auth: token
        }
      })

      .then ((response) => {
        alert("Viagen criada com sucesso!")
        setName("")
        setPlanet("")
        setDate("")
        setDescription("")
        setDuration("")
      })
      .catch ((err) => {
        alert("Não foi possível criar essa viagem, verifique os dados inseridos")
      })
    }
  }

  return (
    <Body>
      <MainContainer>
        <FormContainer>
          <TitleApplication>Criar Viagem</TitleApplication>

          <Field>      
            <Input 
              placeholder="Nome da Viagem"
              value = {name}
              onChange={onChangeName}/>
          </Field>
          <Field>
            <InputSelection
              onChange={onChangePlanet}>
              <option>Escolha um Planeta</option>
              {PlanetSelection}
            </InputSelection>
          </Field>
          <Field>
            <Input
              placeholder="Escolha uma data" 
              type="date" 
              value={date}
              onChange={onChangeDate}/>
          </Field>
          <Field>
            <InputApplication
              placeholder="Descrição"
              value={description}
              onChange={onChangeDescription}/>
          </Field>
          <Field>
            <Input 
              placeholder="Duração em dias"
              value={duration}
              onChange={onChangeDuration}/>
          </Field>

          <ButtonApplication onClick={createTrip}>Criar</ButtonApplication>
          <ButtonApplication onClick={()=>goBack(navigate)}>Voltar</ButtonApplication>

        </FormContainer>
      </MainContainer>
    </Body>
  )
}

