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
      pounds: null,
      doneLoading: false,
    }
  }

  generateCharacter() {
  const num = Math.ceil(Math.random() * 88)
  const src = `https://akabab.github.io/starwars-api/api/id/${num}.json`
  
  fetch(src)
    .then(res => res.json())
    .then(data => {
      // Handle height
      let height = "Unknown";
      if (!isNaN(parseFloat(data.height))) {
        height = (parseFloat(data.height) * 100).toFixed(0); // convert meters to cm
      }

      // Handle mass
      let massKg = "Unknown";
      let massLbs = "Unknown";
      if (!isNaN(parseFloat(data.mass))) {
        massKg = parseFloat(data.mass).toFixed(0);
        massLbs = (parseFloat(data.mass) * 2.20462).toFixed(0);
      }

      this.setState({
        imgSrc: data.image,
        name: data.name,
        height: height,
        mass: massKg,
        pounds: massLbs,
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
              <h3>Height: {this.state.height !== "Unknown" ? `${this.state.height} cm` : "Unknown"}</h3>
              <h3>Mass: {this.state.mass !== "Unknown" ? `${this.state.mass} kg (${this.state.pounds} lbs)` : "Unknown"}</h3>
              <h3>Eye Color: {this.state.eye_color}</h3>
              <h3>Hair Color: {this.state.hair_color}</h3>
              <h3>Skin Color: {this.state.skin_color}</h3>
            </div>
            <div className="characterImg"><img src={this.state.imgSrc} height="350px" width="250px"/></div>
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
