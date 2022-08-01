import React, { useEffect, useState, useContext } from 'react'
import axios from 'axios'
import { BASE_URL } from '../Constants/BASE_URL'
import {  useNavigate, useParams } from 'react-router-dom'
import { goToFeed } from "../Routes/Coordinator";
import { GlobalContext } from '../Global/GlobalContext'
import { useForm } from '../Hooks/useForm'
import { MainContainer } from '../Styles/styled'
import { Header } from '../Components/Header'
import { useProtectedPage } from '../Hooks/useProtectedPage'
import {CardContainer, SentBy, AnswerContainer, ActionsContainer, PostDetailsTitleContainer, BodyContainer, Title, PostForm, InputAnswer, ButtonAnswer, AnswersCardContainer, GoToPageLink} from '../Styles/styled'
import upvoteEmpty from '../Images/upvote-empty.svg'
import upvoteFull from '../Images/upvote-full.svg'
import downvoteEmpty from '../Images/downvote-empty.svg'
import downvoteFull from '../Images/downvote-full.svg'


export const Post = () => {
  const {posts, setPosts} = useContext(GlobalContext)

  const {form, onChange, clearFields} = useForm({body:""})

  const [coments, setComents] = useState([])
  const [postDetail, setPostDetail] = useState({})

  const token = localStorage.getItem("token")
  const params = useParams()
  const id = params.id

  const navigate = useNavigate()

  useProtectedPage()
    
  let postDetails = JSON.parse(localStorage.getItem("post"))

  useEffect(() => { 
      postDetails && postDetails.id == id ? setPostDetail(postDetails) :
      posts.filter((post) => {
        if(post.id==id){
          localStorage.setItem('post', JSON.stringify(post))
          setPostDetail(post)
        }
    })

    getComents()
  }, [])


  const getComents = () => {
    axios
    .get(`${BASE_URL}/posts/${id}/comments`, {
      headers: {
        Authorization: token
      }
    })
    .then((response) => {
      setComents(response.data)
    })
    .catch((err) => {
      alert(err.data)
    })

  }


  const postNewComent = (event) => {
    event.preventDefault()
    axios
    .post(`${BASE_URL}/posts/${id}/comments`, form, {
      headers: {
        Authorization: token
      }
    })
    .then ((response) => {
      getComents()
    })
    .catch ((err) => {
      alert(err.response.data)
    })
    clearFields()
  }


  const upVote = (id, userVote) => {

    if (userVote == null) {
      const body = {
        direction: 1
      }  
      axios 
      .post(`${BASE_URL}/comments/${id}/votes`, body, {
        headers: {
          Authorization: token
        }
      })
      .then ((response) => {
        getComents()
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
      .put(`${BASE_URL}/comments/${id}/votes`, body, {
        headers: {
          Authorization: token
        }
      })
      .then ((response) => {
        getComents()
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
    .delete (`${BASE_URL}/comments/${id}/votes`, {
      headers: {
        Authorization: token
      }
    })
    .then ((response) => {
      getComents()
    })
    .catch ((err) => {
      alert("Não foi possivel registrar seu voto")
    })
  }


  const allComents = coments.map((coment) => {
    return <AnswersCardContainer>
      <SentBy>Enviado por: {coment.username}</SentBy>
      {coment.body}
      <ActionsContainer>
        <span onClick = {() => upVote(coment.id, coment.userVote)}> {coment.userVote == 1 ?  <img src = {upvoteFull}></img>: <img src = {upvoteEmpty}></img> }</span >
        {coment.voteSum} 
        <span onClick = {() => downVote(coment.id, coment.userVote)}> {coment.userVote == -1 ?  <img src = {downvoteFull}></img>: <img src = {downvoteEmpty}></img> }</span >
      </ActionsContainer>
      </AnswersCardContainer>
  })


  return (
    <MainContainer>
      <Header/>
      <AnswerContainer>
        <PostDetailsTitleContainer>
          <Title>
            {postDetail.title}
          </Title>
        </PostDetailsTitleContainer>
        <BodyContainer>{postDetail.body}</BodyContainer>
        <PostForm onSubmit={postNewComent}>
        <p>
          <InputAnswer 
            name="body"
            placeholder="Escreva seu comentário..."
            value={form.password}
            onChange={onChange}
            required
            />
        </p>
        <p><ButtonAnswer>ENVIAR</ButtonAnswer></p>
      </PostForm>
      </AnswerContainer>



      {allComents}
      <GoToPageLink onClick={()=>goToFeed(navigate)}>Voltar</GoToPageLink>

    </MainContainer>
  )
}
