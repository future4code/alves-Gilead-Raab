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

const Tracks = styled.ul`
  text-transform: uppercase;
  display: flex;
  padding:0;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  list-style-type: none;
`

const PlaylistName = styled.h2`
  text-transform: uppercase;
  text-align:center;
`

const SongInput = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: flex-start;
  align-items: center;
  font-size: 3vh;
  opacity: 0.8;
`
const FieldInput = styled.input`
  height: 3vh;
  width: 40%;
  padding: 6px 8px;
  margin-bottom: 1vh;
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
    songUrl: "",
    trackId:"",

    tracks:[]

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


  //Adiciona músicas a playlist

  getId = (id, name) =>{
    this.getTracks()
    this.setState({playlistId: id})
    this.setState({playlistName: name})
  }

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
        this.getTracks()
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


  getTracks = () =>{
    const id = this.state.playlistId
    axios
      .get(
        `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`,
        {
          headers: {
            Authorization: "gilead-raab-alves"
          }
        }
      )
      .then((answer) => {
        this.setState({tracks:answer.data.result.tracks})
        console.log(answer)

      })
      .catch((erro) => {
        console.log(erro);
      });
  };

  deletePlaylist = (id) => {
    if (window.confirm ("DO YOU REALY WANT TO DELETE THIS PLAYLIST?")){
      axios
      .delete(
        `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`,
        {
          headers: {
            Authorization: "gilead-raab-alves"
          }
        }
      )
      .then((answer) => { 
        this.getPlaylists()
        console.log(answer)
  
      })
      .catch((erro) => {
        console.log(erro);
      }); 
    }else{
      this.getPlaylists()
    }

};



  render() {
    const listAllplaylists = this.state.playlists.map((playlist)=>{
      return (<li key={playlist.id}><span onClick={()=>this.getId(playlist.id, playlist.name)} onDoubleClick = {()=>this.deletePlaylist(playlist.id)} >{playlist.name}</span></li>)
    })

    const listAllTracks = this.state.tracks.map((track) =>{
      return <li key={track.id}> {track.artist} - {track.name}</li>
    })

    return (
      <MainContainer>

        <Title>MY PLAYLISTS</Title>

        <PlaylistName>{this.state.playlistName}</PlaylistName>

        <Playlists>{listAllplaylists}</Playlists>



        <SongInput>
          <Tracks>{listAllTracks}</Tracks>

          <FieldInput placeholder="Song Name" value={this.state.songName} onChange={this.newSongName} />
          <FieldInput placeholder="Artist Name" value={this.state.songArtist} onChange={this.newArtistName} />
          <FieldInput placeholder="URL" value={this.state.songUrl} onChange={this.newSongUrl} />
          <Button onClick={this.addNewSong}>ADD SONG TO PLAYLIST</Button>

          <Button onClick={this.props.goToNewPlaylist}>Create new playlist</Button>
        </SongInput>
      </MainContainer>
    )
  }
}
