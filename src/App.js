import logo from './logo.svg';
import './App.css';
import React from 'react'
import SoundSelector from './SoundSelector'

class App extends React.Component{
  
  state = {
    sound: "http://soundbible.com/grab.php?id=2108&type=wav"
  }

  componentDidMount(){
    window.addEventListener("keydown", e => {
          this.playSound()
      })
  }

  playSound = () => {

    var audio = new Audio(this.state.sound)
    audio.play()
  }

  soundChangeHandler = (imptSound) => {
   if(imptSound === "Type"){
    this.setState({sound: "http://soundbible.com/grab.php?id=2108&type=wav"})
   }else if(imptSound==="Cluck"){
    this.setState({sound: ""})
   }else if(imptSound === "Piano"){
    this.setState({sound: "https://freesound.org/people/neatonk/sounds/148580/download/148580__neatonk__piano-med-ab7.wav"})
   }else if(imptSound === "Nose"){
    this.setState({sound: "https://freesound.org/people/Otakua/sounds/219913/download/219913__otakua__snif01.wav"})
   }

  }

  render(){
      return (
        <div> 
          <SoundSelector soundChangeHandler={this.soundChangeHandler}/>
        </div>

    );
  }
}


export default App;
