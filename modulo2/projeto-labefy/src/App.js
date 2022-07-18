import React, { Component } from 'react'
import NewPlaylist from "./components/NewPlaylist"
import PlaylistDetails from "./components/PlaylistDetails"



export default class App extends Component {
  state={
    screen:"create"
  }

  switchScreen = () =>{
    switch (this.state.screen){
      case "create":
        return <NewPlaylist goToDetails={this.changeToPlaylistDetails}/>
      case "details":
        return <PlaylistDetails goToNewPlaylist={this.changeToNewPlaylist}/>
      default:
        return <div>Not found</div>
    }
  }
  
  changeToNewPlaylist = () => {
    this.setState({screen: "create"})
  }

  changeToPlaylistDetails = () => {
    this.setState({screen: "details"})
  }

  render() {
    return (
      <div>
        {this.switchScreen()}
      </div>
    )
  }
}
