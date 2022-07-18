import styled from "styled-components";
import "../App.css";


//General styles
export const Body = styled.div`
  height: 100vh;
  width: 100vw;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
  justify-content: center

`

export const MainContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 25%;

  @media screen and (min-device-width : 320px) and (max-device-width : 480px){
    display: block;
    width: 100%;
  }

`

export const MatchesContainer = styled.div`
  height: 82vh;
  background-color: #DCDCDC;
  width: 100%;
  overflow: auto

`

//Header styles
export const Header = styled.div`
  display: flex;
  background-color: #289c95;
  width: 100%;
  height: 10vh;
  align-items: center;
  justify-content: space-evenly
`

export const Name = styled.span`
  font-family: 'romantic';
  font-size: 6vh;
  color: #D9D9D9;
  filter: drop-shadow(1px 1px 1px #6F7378)

`

export const Logo = styled.img`
  height: 6vh;;
`

//Profiles page styles
export const PhotoContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding-top: 2vh;
  margin-bottom: 3vh;
  height: 55vh;

  @media screen and (min-device-width : 320px) and (max-device-width : 480px){
    height: 50vh
  }
`

export const ProfilePhoto = styled.img`
  width: 95%;
  height: 100%;
  border-radius: 6px;
  filter: drop-shadow(0px 3px 1px #6F7378)
`

export const ProfileName = styled.div`
  font-size: 3vh;
  font-weight: bold
`

export const Age = styled.span`
  font-weight: normal
`

export const Bio = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1em;  

`

export const ActionsContainer = styled.div`
  display: flex;
  margin-top: 1em;
  align-items: center;
  justify-content: space-around

`

export const Chat = styled.img`
  height: 6vh;

  :hover{
    cursor: pointer;
    transform: scale(1.1)
  }
`

export const Dislike = styled.img`
  height: 6vh;

  :hover{
    cursor: pointer;
    transform: scale(1.1)
  }
`

export const Like = styled.img`
  height: 6vh;

  :hover{
    cursor: pointer;
    transform: scale(1.1)
  }
`

//Matches page styles
export const ProfilesPage = styled.div`
  display: flex;
  height: 7vh;
  width: 100%;
  background-color: #D3D3D3;
  align-items: center;
  justify-content: center;
`

export const ProfileContainer = styled.div`
  display: flex;
  height: 7vh;
  padding: 1em;
  align-items: center;
  font-size: 1.5em;
`

export const ProfileImage = styled.img`
  border-radius: 6px; 
  margin-right: 1em;

`

//Reset page styles
export const ResetContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  width: 100%;
  text-align: center;
  font-size: 5vh;
  align-items: center;
  justify-content: center;

`

export const ResetButton = styled.button`
  background-color: #289c95;
  border: none;
  color: white;
  margin-top: 2vh;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;

  :hover{
    cursor: pointer;
    transform: scale(1.1)
  }
`

//Footer styles
export const Footer = styled.div`
  display: flex;
  width: 100%;
  background-color: #289c95;
  align-items: center;
  justify-content: center;
  height: 8vh;

  @media screen and (min-device-width : 320px) and (max-device-width : 480px){
    position: fixed;
    bottom:0
  }
`

export const LogoFooter = styled.img`
  height: 4vh;
  background-color: #289c95;


