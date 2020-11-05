import logo from './logo.svg';
import './App.css';
import React from 'react'
import SoundSelector from './SoundSelector'

class App extends React.Component{
  
  state = {
    sound: ""
  }

  playSound = () => {
    console.log(this.state.sound)
    //var audio = new Audio(this.state.sound)
    //audio.play()
  }

  soundChangeHandler = (imptSound) => {
   if(imptSound === "Type"){
    console.log("duck hello")
   }else if(imptSound==="Cluck"){
    console.log("duck cluck")
   }else if(imptSound === "Piano"){
    console.log("ring ring ring")
   }else if(imptSound === "Nose"){
    console.log("Smelly")
   }

  }

  render(){
      return (
        <div> 
          <h1 onClick = {()=> {
            this.playSound()
            }}> Hello World </h1> 
          <SoundSelector soundChangeHandler={this.soundChangeHandler}/>
        </div>

    );
  }
}


export default App;
