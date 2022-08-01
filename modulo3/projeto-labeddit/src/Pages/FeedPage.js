import React, { useContext, useEffect, useState } from 'react'
import { useProtectedPage } from '../Hooks/useProtectedPage'
import { BASE_URL } from '../Constants/BASE_URL'
import axios from 'axios'
import { useForm } from '../Hooks/useForm'
import { goTopostDetails, logout } from '../Routes/Coordinator'
import { useNavigate, useParams } from 'react-router-dom'
import coment from '../Images/coment.svg'
import upvoteEmpty from '../Images/upvote-empty.svg'
import upvoteFull from '../Images/upvote-full.svg'
import downvoteEmpty from '../Images/downvote-empty.svg'
import downvoteFull from '../Images/downvote-full.svg'
import { GlobalContext } from '../Global/GlobalContext'
import { Header } from '../Components/Header'
import { TitleContainer, SentBy, InputPost, InputPostTitle, MainContainer, PostForm, CardContainer, ActionsContainer, ButtonAnswer } from '../Styles/styled'
import { Votes } from '../Components/Votes'

export const FeedPage = () => {
  useProtectedPage()

  const params = useParams()

  const {posts, setPosts} = useContext(GlobalContext)

  const navigate = useNavigate()

  const {form, onChange, clearFields} = useForm({title:"", body:""})

  const token = localStorage.getItem("token")
  
  useEffect(() => {
    getPosts()

  },[])
  
  
  const getPosts = () => {
    axios
    .get(`${BASE_URL}/posts`, {
      headers: {
        Authorization: token
      }
    })
    .then((response) => {
      setPosts(response.data)
    })
    .catch((err) => {
      alert(err.data.response)
    })
  }

  const newPost = (event) => {
    event.preventDefault()
    axios
    .post (`${BASE_URL}/posts`, form, {
      headers: {
        Authorization: token
      }
    })
    .then ((response) => {
      getPosts()
    })
    .catch ((err) => {
      alert("Não foi possivel criar um novo post")
    })
    clearFields()
  }


  const upVote = (id, userVote) => {

    if (userVote == null) {
      const body = {
        direction: 1
      }  
      axios 
      .post(`${BASE_URL}/posts/${id}/votes`, body, {
        headers: {
          Authorization: token
        }
      })
      .then ((response) => {
        getPosts()
      })
      .catch ((err) => {
        alert("Não foi possivel registrar seu voto")
      })
    } else {
      deleteVote(id)

    }
  }


  const downVote = (id, userVote) => {

    if (userVote == null) {
      const body = {
        direction: -1
      }  
      axios 
      .put(`${BASE_URL}/posts/${id}/votes`, body, {
        headers: {
          Authorization: token
        }
      })
      .then ((response) => {
        getPosts()
      })
      .catch ((err) => {
        alert("Não foi possivel registrar seu voto")
      })
    } else {
      deleteVote(id)

    }
  }


  const deleteVote = (id) => {
    axios
    .delete (`${BASE_URL}/posts/${id}/votes`, {
      headers: {
        Authorization: token
      }
    })
    .then ((response) => {
      getPosts()
    })
    .catch ((err) => {
      alert("Não foi possivel deletar seu voto")
    })
  }
  

  const postCard = posts.map((post) => {
    return <CardContainer>
      <SentBy>Enviado por: {post.username}</SentBy>
      <TitleContainer>
        <h3 onClick = {()=> goTopostDetails(navigate, post)}>
          {post.title}
        </h3>
      </TitleContainer>
      <ActionsContainer>
        <span onClick = {() => upVote(post.id, post.userVote)}> {post.userVote == 1 ?  <img src = {upvoteFull}></img>: <img src = {upvoteEmpty}></img> }</span >
        {post.voteSum} 
        <span onClick = {() => downVote(post.id, post.userVote)}> {post.userVote == -1 ?  <img src = {downvoteFull}></img>: <img src = {downvoteEmpty}></img> }</span >
        <img src={coment} onClick = {()=> goTopostDetails(navigate, post)}></img>
        {post.commentCount}
      </ActionsContainer>
    </CardContainer>

  })

  

  return (
    <MainContainer>
      <Header/>
      <PostForm onSubmit={newPost}>
        <p>
          <InputPostTitle 
            name="title"
            placeholder="Título do post"
            value={form.title}
            onChange={onChange}
            required
            />

        </p>
        <p>
          <InputPost 
            name="body"
            placeholder="Escreva seu post..."
            value={form.body}
            onChange={onChange}
            />
        </p>
        <p><ButtonAnswer>Postar</ButtonAnswer></p>
      </PostForm>
      {postCard}
    </MainContainer>
  )
}
