import React from "react"
import axios from 'axios'
import { BASE_URL } from "../Constants/BASE_URL"
import { ActionsContainer } from '../Styles/styled'
import coment from '../Images/coment.svg'
import upvoteEmpty from '../Images/upvote-empty.svg'
import upvoteFull from '../Images/upvote-full.svg'
import downvoteEmpty from '../Images/downvote-empty.svg'
import downvoteFull from '../Images/downvote-full.svg'


export const Votes = (props) => {
  const post = props.post
  const getPosts = props.getPosts()
  const token = localStorage.getItem("token")


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
        alert("não foi possivel registrar seu voto")
      })
    } else {
      deleteVote(id)

    }
    getPosts()
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
        alert("não foi possivel registrar seu voto")
      })
    } else {
      deleteVote(id)

    }
    getPosts()
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
      alert("não foi possivel registrar seu voto")
    })
  }


  return (
    <ActionsContainer>
      <span onClick = {() => upVote(post.id, post.userVote)}> {post.userVote == 1 ?  <img src = {upvoteFull}></img>: <img src = {upvoteEmpty}></img> }</span >
      {post.voteSum} 
      <span onClick = {() => downVote(post.id, post.userVote)}> {post.userVote == -1 ?  <img src = {downvoteFull}></img>: <img src = {downvoteEmpty}></img> }</span >
      <img src={coment}></img>
      {post.commentCount}
    </ActionsContainer>
  )

}