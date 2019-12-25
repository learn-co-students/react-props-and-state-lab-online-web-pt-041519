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

  onChangeType = (type) => {
    this.setState({
      filters: {
        type: type
      }
    })
  }

  onFindPetsClick = () => {
    const filter = this.state.filters.type 
    if (filter === 'all') {
      fetch('/api/pets').then(resp => this.state.pets = resp)
    } else if (filter === 'cat') {
      fetch('/api/pets?type=cat').then(resp => this.state.pets = resp)
    } else if (filter === 'dog') {
      fetch('/api/pets?type=dog').then(resp => this.state.pets = resp)
    } else if (filter === 'micropig') {
      fetch('/api/pets?type=micropig').then(resp => this.state.pets = resp)
    }
  }

  onAdoptPet = (id) => {
    const pet = this.state.pets.find(p => p.id === id)
    pet.isAdopted = true
    this.setState({pet})
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
              <Filters onChangeType={this.onChangeType} onFindPetsClick={this.onFindPetsClick} />
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.onAdoptPet} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
