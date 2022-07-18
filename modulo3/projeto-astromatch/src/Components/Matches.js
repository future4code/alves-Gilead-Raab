import axios from "axios";
import { useEffect, useState } from "react";
import React from 'react'
import { MatchesContainer } from "./Styles";
import LikeImage from "./Img/like.png"
import { ProfileContainer, ProfilesPage, ProfileImage, Like } from "./Styles";

export default function Matches(props) {
  const [matches, setMatches] = useState([])

  useEffect(() => {
    getMatches()
  }, [])

  const getMatches = (() => {
    axios
    .get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/gileadraab/matches")
    .then((res) => setMatches(res.data.matches))
    .catch((err) => alert(err.response))
  })

  const showMatches = matches.map(match => {
    return <ProfileContainer><ProfileImage src= {match.photo}height='70vh' width='70vw'/>{match.name}</ProfileContainer>
  })


  return (
    <MatchesContainer>
      <ProfilesPage> <Like src={LikeImage} onClick={() => props.changeScreen("profiles")}></Like></ProfilesPage>
      {showMatches}
    </MatchesContainer>
  )
}
