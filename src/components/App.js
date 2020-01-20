import React from "react";

import Filters from "./Filters";
import PetBrowser from "./PetBrowser";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      pets: [],
      filters: {
        type: "all"
      }
    };
  }

  onChangeType = event => {
    console.log(event.target.value);
    this.setState({
      filters: {
        type: event.target.value
      }
    });
  };

  onFindPetsClick = async () => {
    let url = "/api/pets";
    if (this.state.filters.type !== "all") {
      url += `?type=${this.state.filters.type}`;
    }

    let res = await fetch(url);
    let petsJsonArray = await res.json();
    this.setState({
      pets: petsJsonArray
    });
  };

  onAdoptPet = id => {
    let petsArray2 = [...this.state.pets];
    const pet = petsArray2.find(pet => pet.id == id);
    pet.isAdopted = !pet.isAdopted;
    console.log(pet);
    this.setState({
      pets: petsArray2
    });
  };

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters
                onChangeType={this.onChangeType}
                onFindPetsClick={this.onFindPetsClick}
              />
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.onAdoptPet} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
