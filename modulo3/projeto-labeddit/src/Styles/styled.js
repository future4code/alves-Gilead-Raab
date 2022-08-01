import styled from "styled-components";

//General styles
export const Body = styled.div`
  min-height: 100vh;
  background-color: #DCDCDC;
  max-width: 100%;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`

export const MainContainer = styled. div`
  min-height: 100vh;
  display: flex;
  width: 650px;
  flex-direction: column;
  align-items: center;
  background-color: #E0E0E0;

  @media screen and (min-device-width : 320px) and (max-device-width : 480px){
    width: 100%;
    background-color: #E0E0E0;
  }

`

export const HR = styled.hr`
  width: 100%;
  border: none;
  height: 1px;
  background: linear-gradient(90deg, #FF6489 0%, #F9B24E 100%);
`

export const Button = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 13px 133px;
  border: none;
  border-radius: 27px;

  width: 340px;
  height: 51px;
  left: 29px;
  top: 587px;

  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 18px;
  color: white;

  cursor: pointer;

  background: linear-gradient(90deg, #FF6489 0%, #F9B24E 100%);

  : hover {
    background: linear-gradient(90deg, #FF6480 10%, #F9B20E 100%);
  }
`

export const GoToPageLink = styled.span`
  color: orange;
  cursor: pointer;
  font-size: 25px;

  :hover{
    color: #FF4500;
    font-weight: 600;
  }

  @media screen and (min-device-width : 320px) and (max-device-width : 480px){
    font-size: 20px;
  }
`

//Header styles
export const HeaderStyled = styled.header`
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
  width: 650px;
  justify-content: space-between;
  
  padding: 0px 20px 0px 20px;
  

  img{
    height: 70px;
    padding-bottom: 10px;
  }

  @media screen and (min-device-width : 320px) and (max-device-width : 480px){
    width: 100%;
    padding: 0px 20px 0px 20px;

    img{
      height: 50px;
    }

  }
`


//Login Styles
export const Logo = styled.img`
  height: 200px;
  margin-top: 100px;
  margin-bottom: 20px ;

  @media screen and (min-device-width : 320px) and (max-device-width : 480px){
    margin-top: 60px;
  }

` 

export const Title = styled.div`
  font-family: 'IBM Plex Sans', sans-serif;;
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 47px;
  color: #373737;
` 

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 50vh;
  justify-content: space-evenly;
`

export const Input = styled.input`
  width: 327px;
  padding: 10px;
  padding-bottom: 0;
  height: 60px;
  border: 0;
  border-bottom: 1px solid grey;
  outline: 0;
  background-color: #E0E0E0;

  ::placeholder {
    font-size: 15px;
  }
`

//Feed and Post Details Styles
export const PostForm = styled.form`
  margin-top: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 35vh;

  @media screen and (min-device-width : 320px) and (max-device-width : 480px){
    height: 320px;
  }
`

export const InputPostTitle = styled.textarea`
  resize: none;
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 20px;
  font-weight: bold;
  width: 610px;
  padding: 30px 10px 0px 10px;
  padding-bottom: 0;
  height: 80px;
  border: 0;
  outline: 0;
  background-color: #E0E0E0;

  ::placeholder {
    font-size: 20px;
    font-family: 'IBM Plex Sans', sans-serif;;
  }

  @media screen and (min-device-width : 320px) and (max-device-width : 480px){
    width: 327px;;
    font-size: 20px;

    ::placeholder {
      font-size: 20px;
    }
  }
`

export const InputPost = styled.textarea`
  resize: none;
  font-family: 'IBM Plex Sans', sans-serif;;
  font-size: 20px;
  width: 610px;
  padding: 5px 10px 0px 10px;
  margin-bottom: 10px;
  height: 150px;
  border: 0;
  outline-color: #D3D3D3;
  outline-width: 12px;
  background-color: #E0E0E0;

  ::placeholder {
    font-size: 20px;
    font-family: 'IBM Plex Sans', sans-serif;;
  }

  @media screen and (min-device-width : 320px) and (max-device-width : 480px){
    width: 327px;;
    font-size: 15px;
    //outline: 0;

    ::placeholder {
      font-size: 15px;
    }
  }
`

export const CardContainer = styled.div`
  display:flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 610px;
  height: 200px;
  padding: 10px;
  background-color: #E0E0E0;
  margin: 5px;
  border: solid 1px #D3D3D3;
  align-items: flex-start;

  @media screen and (min-device-width : 320px) and (max-device-width : 480px){
    width: 327px;;
  }
`

export const TitleContainer = styled.div`
  display:flex;
  height: 135px;
  width: 610px;
  align-items: flex-start;

  h3{
    font-family: 'IBM Plex Sans', sans-serif;;
    font-style: normal;
    font-size: 20px;
    color: #373737;
  }
`

export const ActionsContainer = styled.div`
  display:flex;
  padding: 5px;

  height: 30px;
  width: 610px;
  
  justify-content: space-evenly;

  @media screen and (min-device-width : 320px) and (max-device-width : 480px){
    width: 327px;;
  }

`

export const SentBy = styled.div`

  width: 610px;
  height: 20px;
  font-family: 'IBM Plex Sans', sans-serif;
  color: #989898;
  font-size: 15px;

  @media screen and (min-device-width : 320px) and (max-device-width : 480px){
    width: 327px;;
    font-size: 15px;
  }

`

export const AnswerContainer = styled.div`
  display:flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 610px;
  height: 380px;
  padding: 10px;
  background-color: #E0E0E0;
  margin: 5px;
  border: solid 1px #D3D3D3;
  align-items: flex-end;

  @media screen and (min-device-width : 320px) and (max-device-width : 480px){
    width: 327px;;
  }
`
export const BodyContainer = styled.div`
  display:flex;
  height: 60px;
  width: 610px;
  align-items: flex-start;
  font-family: 'IBM Plex Sans', sans-serif;;
  font-style: normal;
  font-size: 20px;
  color: #373737;

`

export const InputAnswer = styled.textarea`
  resize: none;
  font-family: 'IBM Plex Sans', sans-serif;;
  font-size: 20px;
  width: 585px;
  padding: 5px 10px 0px 10px;
  margin-bottom: 10px;
  height: 150px;
  border: 0;
  outline-color: #D3D3D3;
  outline: 0;
  outline-width: 12px;
  background-color: #E0E0E0;

  ::placeholder {
    font-size: 20px;
    font-family: 'IBM Plex Sans', sans-serif;;
  }

  @media screen and (min-device-width : 320px) and (max-device-width : 480px){
    width: 300px;;
    font-size: 15px;
    //outline: 0;

    ::placeholder {
      font-size: 15px;
    }
  }
`

export const PostDetailsTitleContainer = styled.div`
  display:flex;
  height: 50px;
  width: 610px;
  align-items: flex-start;

  h3{
    font-family: 'IBM Plex Sans', sans-serif;;
    font-style: normal;
    font-size: 20px;
    color: #373737;
  }
`


export const ButtonAnswer = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 13px 133px;
  border: none;
  border-radius: 10px;

  width: 300px;
  height: 51px;
  left: 29px;
  top: 587px;

  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 18px;
  color: white;

  cursor: pointer;

  background: linear-gradient(90deg, #FF6489 0%, #F9B24E 100%);

  : hover {
    background: linear-gradient(90deg, #FF6480 10%, #F9B20E 100%);
  }
`

export const AnswersCardContainer = styled.div`
  display:flex;
  flex-direction: column;
  justify-content: space-around;
  width: 610px;
  height: 150px;
  padding: 10px;
  background-color: #E0E0E0;
  margin: 5px;
  border: solid 1px #D3D3D3;
  align-items: flex-start;

  @media screen and (min-device-width : 320px) and (max-device-width : 480px){
    width: 327px;;
  }
`