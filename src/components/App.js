import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

    handleChangeType = event => {
      this.setState({
        filters: {
          type: event.target.value
        }
      })
    }

    handleFindPets = () => {
      var fetched
      if(this.state.filters.type === "all") {
        fetched = fetch('/api/pets')
      } else if (this.state.filters.type === "cat") {
        fetched = fetch('/api/pets?type=cat')
      } else if (this.state.filters.type === "dog") {
        fetched = fetch('/api/pets?type=dog')
      } else {
        fetched = fetch('/api/pets?type=micropig')
      }
      fetched.then((response) => {
        return response.json();
      })
      .then((myJson) => {
        this.setState({
          pets: myJson
        })
      });
    }

    handleAdoptPet = (id) => {
      let foundPet = this.state.pets.find(pet => pet.id === id)
      foundPet.isAdopted = true
    }


  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.handleChangeType} value={this.state.filters.type} onFindPetsClick={this.handleFindPets}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.handleAdoptPet} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
