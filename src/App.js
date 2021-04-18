
import './App.css';
import React, { Component } from 'react';
import image from "./image.jpg"
   
   
   
 class App extends Component {
  constructor(props) {
    super(props)
    this.state ={
      fullName:"Amina Mkhinini.",
      bio:"I am a food engineering.", 
      profession:"I am a future full-stack web developer.",
      imgSrc: <img src={image} alt ='myImage'className="photo"/>,
      show :false,
      digit:0    
    };
  }
show =()=> {
  this.setState({ show:!this.state.show})
}

  componentDidMount=() =>{
    setInterval(()=>{
this.setState(prevState=>({digit: prevState.digit +1,}));
    },1000);
  };
render() {
    return (
      <div className="App">
       <h1> My Profil</h1> 
       {this.state.show? 
       <p className="profil">{this.state.fullName}
       <br/> {this.state.bio}
       <br/> {this.state.profession}
       <br/> 
       {this.state.imgSrc}
       </p> : null}
       <button onClick= {this.show} className="show-btn" > show me the profil </button>
       <p className="count"> counter : {this.state.digit}</p>
      </div>
    )
  }
}


export default App;
