import React from 'react'
import axios from 'axios'
import {BASE_URL} from "../Constants/BASE_URL"
import { useForm } from '../Hooks/useForm'
import { Title, Form, Input, Button, MainContainer, HeaderStyled } from '../Styles/styled'
import { Header } from '../Components/Header'
import { useUnprotectedPage } from '../Hooks/useUnprotectedPage'

export const Registration = () => {

  const {form, onChange, clearFields} = useForm({username:"", email:"", password:""})

  useUnprotectedPage()


  const signIn = (event) => {
    event.preventDefault()
    axios
    .post(`${BASE_URL}/users/signup`, form)
    .then ((response) => {
      localStorage.setItem('token', response.data)

    })
    .catch ((err) => {
      alert(err.response.data)
    })
    clearFields()
  }


  return (
    <MainContainer>
      <Header/>
      <Form onSubmit={signIn}>
        <Title>Inscrever-se</Title>
        <p>
          <Input
            name="username"
            placeholder="Username"
            value={form.username}
            onChange={onChange}
            required
            />
        </p>

        <p>
          <Input 
            name="email"
            placeholder="email"
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

        <p><Button>Criar</Button></p>
      </Form>
    </MainContainer>
  )
}

