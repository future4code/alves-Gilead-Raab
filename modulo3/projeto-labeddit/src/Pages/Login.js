import React from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import {BASE_URL} from "../Constants/BASE_URL"
import { goToFeed, goToRegistration } from '../Routes/Coordinator'
import { useForm } from '../Hooks/useForm'
import { useEffect } from 'react'
import {MainContainer, Button, Logo, Title, Form, Input, HR, GoToPageLink} from '../Styles/styled'
import labenuLogo from '../Images/labenu-logo.png'
import { useUnprotectedPage } from '../Hooks/useUnprotectedPage'

export const Login = () => {
  const {form, onChange, clearFields} = useForm({email:"", password:"" })

  const navigate = useNavigate()

  useUnprotectedPage()

  const login = (event) => {
    event.preventDefault()
    axios
    .post(`${BASE_URL}/users/login`, form)
    .then ((response) => {
      localStorage.setItem('token', response.data.token)
      clearFields()
      goToFeed(navigate)
    })
    .catch ((err) => {
      alert(err.response.data)
    })
  }


  return (
    <MainContainer>

    <Logo src={labenuLogo}/>

    <Title>LabEddit</Title>

    <Form onSubmit={login}>
      <p>
        <Input 
          name="email"
          placeholder="E-mail"
          type="email"
          value={form.email}
          onChange={onChange}
          required
          />

      </p>
      <p>
        <Input 
          name="password"
          placeholder="Senha"
          type="password"
          value={form.password}
          onChange={onChange}
          pattern=".{8,30}" title="Senha deve possuir no mínimo 8 e no máximo 30 caracteres"
          required
          />
      </p>
      <p><Button>Entrar</Button></p>
      
      <HR/>

      <p>Novo no Labeddit? <GoToPageLink onClick={() => goToRegistration(navigate)}>Inscreva-se</GoToPageLink></p>
    </Form>


  </MainContainer>
  )
}
