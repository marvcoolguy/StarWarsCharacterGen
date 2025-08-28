import './App.css';
import React from 'react';

class StarWars extends React.Component {

  constructor() {
    super()
    this.state = {
      imgSrc: null,
      name: null,
      height: null,
      mass: null,
      eye_color: null,
      hair_color: null,
      skin_color: null,
      doneLoading: false,
    }
  }

  generateCharacter() {
    console.log("Hello from marv")
    const num = Math.ceil(Math.random() * 88)
    const src = `https://akabab.github.io/starwars-api/api/id/${num}.json`
    fetch(src) 
    .then(res => res.json())
    .then(data => {
      this.setState({
        imgSrc: data.image,
        name: data.name,
        height: data.height,
        mass: data.mass,
        eye_color: data.eyeColor,
        hair_color: data.hairColor,
        skin_color: data.skinColor,
        doneLoading: true,
      })
      
    })
  }
  render() {
    return(
      <div>
        {

        }
        <div className='card'>
          {
            this.state.doneLoading &&
          <div className='flex-container'>
            <div>
              <h3>Name: {this.state.name}</h3>
              <h3>Height: {this.state.height}</h3>
              <h3>Mass: {this.state.mass}</h3>
              <h3>Eye Color: {this.state.eye_color}</h3>
              <h3>Hair Color: {this.state.hair_color}</h3>
              <h3>Skin Color: {this.state.skin_color}</h3>
            </div>
            <div className="characterImg"><img src={this.state.imgSrc} height="500px" width="400px"/></div>
          </div>
          }
        </div>
          <button className='btn' onClick={() => this.generateCharacter()}>Randomize Character</button>
      </div>
    )
  }
}

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <h1>Star Wars Character Generator</h1>
        <StarWars />
      </div>
    </div>
  );
}

export default App;
