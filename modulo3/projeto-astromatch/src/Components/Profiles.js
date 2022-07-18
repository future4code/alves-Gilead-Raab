import axios from "axios";
import { useEffect, useState } from "react";
import { MatchesContainer, PhotoContainer, ProfilePhoto, Bio, ProfileName, Age, ActionsContainer, Dislike, Chat, Like } from "./Styles";
import ChatImage from "./Img/chat.png"
import DislikeImage from "./Img/dislike.png"
import LikeImage from "./Img/like.png"
import React from 'react'
import Reset from "./Reset";

export default function Profiles(props) {
  const [profile, setProfile] = useState({})

  //Call the function getProfile every time the page is rendered
  useEffect(() => {
    getProfile()
  }, [])

  //Get an random profile from the API
  const getProfile = (() => {
    axios
    .get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/gileadraab/person")
    .then((res) => setProfile(res.data.profile))
    .catch((err) => alert(err.response))
  })

  //Verify compatibility between user and profile displayed
  const choosePerson = ((userChoice) => {
    const match = {
      id: profile.id,
      choice: userChoice 
    }
    axios
    .post("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/gileadraab/choose-person", match)
    .then ((response) => {
      console.log(response)
      response.data.isMatch  === true && alert("IT'S A MATCH!")
      getProfile()
    })
    .catch((err) => alert(err.response))
  })

  //Reset profiles

  const resetProfiles = (() => {
    axios
    .put("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/gileadraab/clear")
    .then(getProfile())
    .catch((err) => alert(err.response))
  })

  return (
    profile ?
    <MatchesContainer>
      <PhotoContainer><ProfilePhoto src={profile.photo} height='200px' ></ProfilePhoto></PhotoContainer>
      <Bio>
        <ProfileName>{profile.name}, <Age>{profile.age}</Age></ProfileName> 
        <p>{profile.bio}</p>

        <ActionsContainer>
          <Dislike src={DislikeImage} onClick={() => getProfile(false)}></Dislike>
          <Chat src={ChatImage} onClick={() => props.changeScreen("matches")}></Chat>
          <Like src={LikeImage} onClick={() => choosePerson(true)}></Like>
        </ActionsContainer>
      </Bio>

    </MatchesContainer> : 
    <Reset resetProfiles = {resetProfiles}/>
  )
}
