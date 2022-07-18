import styled from "styled-components";
import backgroundimage from "../Images/spaceship.jpg"
import "../App.css"

export const Body = styled.div`
  height: 100vh;
  width: 100vw;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background: linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,.3)),url(${backgroundimage});
  background-position: center top;
  background-size: cover;
`
export const HomeContainer = styled.div`
  margin-bottom: 22em;

`

export const Title = styled.div`
  font-family: 'spacefrigate';
  text-align: center;
  font-size: 15vh;
  color: #D9D9D9;
  filter: drop-shadow(3px 1px 1px #6F7378)
`

export const HomeButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 3em;
`

export const Button = styled.button`
font-family: 'spacefrigate';
font-size: 1em;
text-align: center;
font-weight: bold;
width: 12em;
height: 3em;
border: none;
opacity: 0.7;
cursor: pointer;
  
:hover {
  opacity: 1;
}
`

export const TitleTripList = styled.div`
  font-family: 'spacefrigate';
  height: 1.3em;
  text-align: center;
  font-size: 6vh;
  color: #D9D9D9;
  filter: drop-shadow(3px 1px 1px #6F7378)
`


export const TripContainer = styled.div`
  width: 50em;
  background-color: #cccccc;
  opacity 0.8;
  padding-bottom: 2em;
  padding: 1.5em;
  margin-bottom: 2em;
  box-shadow: 1px 2px 8px #803300
`

export const TripButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 3em;
  align-items: center;
  margin-bottom: 1em;
  cursor: pointer;
`

export const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 30em;
  background-color:#cccccc;
  height:42em;
  opacity: 0.8;
`

export const TitleApplication = styled.div`
  font-family: 'spacefrigate';
  width: 100%;
  height: 1.5em;
  text-align: center;
  font-size: 4vh;
`

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  max-width: 100%;
  height: 100%;
  padding: 2em

`;

export const Form = styled.div`
  font-size: 2vh;
  color: white;
  height: 82%;
  background-color: #a6a6a6;
  padding: 2vw;
`;

export const Field = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 0.8em;
`

export const ButtonApplication = styled.button`
  background-color: #ff6600;
  color: #D9D9D9;
  text-transform: uppercase;
  font-size: 2vh;
  font-weight: bold;
  padding: 12px;
  margin: 0.5em;
  border: none;
  cursor: pointer;
  opacity: 0.7;

  :hover {

    opacity: 1;
  }
`

export const Input = styled.input`
  padding: 6px 8px;
  border-radius: 5px;
  border: none;
  outline: none;
`

export const InputApplication = styled.textarea`
  padding: 6px 8px;
  border-radius: 5px;
  border: none;
  outline: none;
  height: 12vh;
`

export const InputSelection = styled.select`
  padding: 6px 8px;
  border-radius: 5px;
  border: none;
  outline: none;
`

export const MainContainerLogin = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 30em;
  background-color:#cccccc;
  height:20em;
  opacity: 0.9;
`

export const AdminPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em
`

export const AdminTripContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 50em;
  background-color: #cccccc;
  opacity 0.8;
  padding: 1.5em 2em 1.5em;
  box-shadow: 1px 2px 8px #803300;
  cursor:pointer
`

export const BodyTripsDetails = styled.div`
  margin: 0;
  padding-top: 2em;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background: linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,.3)),url(${backgroundimage});
  background-position: center;
  background-size: cover;
`