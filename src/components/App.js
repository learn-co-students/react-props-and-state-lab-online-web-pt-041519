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

  handleTypeChange = e => {
    this.setState({
      filters: {
        type: e.target.value
      }
    })
  }

  fetchPets = () => {
    let url = '/api/pets'
    if (this.state.filters.type !== "all") {
      url += `?type=${this.state.filters.type}`
    }
    fetch(url)
    .then(resp => resp.json())
    .then(petList => this.setState({pets: petList }))
  }

  markAdopted = id => {
    let petArr = [...this.state.pets]
    const pet = petArr.find(pet => pet.id === id)
    pet.isAdopted  = !pet.isAdopted
    this.setState({
      pets: petArr
    })
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
              <Filters
                onChangeType={this.handleTypeChange}
                onFindPetsClick={this.fetchPets}
              />
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.markAdopted}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
