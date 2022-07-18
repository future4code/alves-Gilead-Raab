import React, { Component } from 'react'
import axios from 'axios';
import styled from 'styled-components';

const MainContainer = styled.div`
  display: grid;
  justify-items: stretch;
  align-items: center;
  height: 100vh;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: 1fr 4fr;
  background: lightgrey;
`
const Title = styled.h2`
  height: 100%;
  padding:0;
  margin-left: 6vw;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  grid-column-start: 1;
  grid-column-end: 3;
`

const Playlists = styled.ul`
  text-transform: uppercase;
  display: flex;
  padding:0;
  flex-direction: column;
  margin-left:7vw;
  justify-content: flex-start;
  align-items: flex-start;
  height: 100%;
  list-style-type: none;
`

const PlaylistInput = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: flex-start;
  align-items: center;
  opacity: 0.8;
`
const NameInput = styled.input`
  height: 3vh;
  width: 40%;
  padding: 6px 8px;
  border-radius: 8px;
  border: none;
  outline: none;
`
const Button = styled.button`
  background-color: blue;
  margin-top: 0.5vh;
  color: lightgrey;
  text-transform: uppercase;
  width: 40%;
  padding: 12px;
  border: none;
  cursor: pointer;
  opacity: 0.7;
`



export default class NewPlaylist extends Component {
  state={
    playlists:[],
    playlistName:"",
    playlistId:"",

    songName: "",
    songArtist: "",
    songUrl: ""
  }

  componentDidMount(){
    this.getPlaylists()
  }

  getPlaylists = () => {
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",
        {
          headers: {
            Authorization: "gilead-raab-alves"
          }
        }
      )
      .then((resposta) => {
        this.setState({ playlists: resposta.data.result.list });
      })
      .catch((erro) => {
        this.setState({ erro: erro.response.data });
      });
  };

  //Cria nova playlist
  addPlaylist = () => {
    const newPlaylist = {
      name: this.state.playlistName
    };
    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",
        newPlaylist,
        {
          headers: {
            Authorization: "gilead-raab-alves"
          }
        }
      )
      .then((answer) => {
        console.log(answer);
        this.getPlaylists();
      })
      .catch((erro) => {
        alert(erro.response.data.message);
      });
  };

  newPlaylistName = (e) => {
    this.setState({playlistName: e.target.value})
  }

  //Adiciona músicas a playlist
  addNewSong = () => {
    const id =  this.state.playlistId
    const newSong = {
      name: this.state.songName,
      artist: this.state.songArtist,
      url: this.state.songUrl
    }
    axios
      .post(
        `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`,
        newSong,
        {
          headers: {
            Authorization: "gilead-raab-alves"
          }
        }
      )
      .then((answer) => { 
        console.log(answer);
      })
      .catch((erro) => {
        alert(erro.response.data.message);
      });
  };

  newSongName = (e) => {
    this.setState({songName: e.target.value})
  }

  newArtistName = (e) => {
    this.setState({songArtist: e.target.value})
  }

  newSongUrl = (e) => {
    this.setState({songUrl: e.target.value})
  }

  getId = (id) =>{
    this.setState({playlistId: id})
    this.props.goToDetails()
  }


  render() {
    const listAllplaylists = this.state.playlists.map((playlist)=>{
      return (<li key={playlist.id}><span onClick={()=>this.getId(playlist.id)}>{playlist.name.toUpperCase()}</span></li>)
    })

    return (
      <MainContainer>

        <Title>MY PLAYLISTS</Title>
        <Playlists>{listAllplaylists}</Playlists>

        <PlaylistInput>
          <NameInput placeholder="Playlist Name" value={this.state.playlistName} onChange={this.newPlaylistName}/>
          <Button onClick={this.addPlaylist}>Create</Button>
        </PlaylistInput>

      </MainContainer>
    )
  }
}
