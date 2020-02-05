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
    // Bind onChangeType; use instead of arrow function
    this.onChangeType = this.onChangeType.bind(this);
  }

  // Change filter type state to child component type
  onChangeType(event) {
    this.setState({
      filters: { 
        type: event.target.value
      }
    })    
  }

  // Fetch list of pets based on type
  fetchPets = () => {
    // Define URL based on filter type
    let fetchURL = this.state.filters.type === 'all' ? '/api/pets' : `/api/pets?type=${this.state.filters.type}`
    
    // Fetch and update state of pets
    fetch(fetchURL)
	  .then(resp => resp.json())
    .then(pets => this.setState({ pets: pets }))
  }

  // Change pet isAdopted to true based on id
  onAdoptPet = (id) => {
    // Find matching pet in state.pets and update isAdopted
    const pets = this.state.pets.map(pet => {
      return pet.id !== id ? pet : { ...pet, isAdopted: true }
    })
    // Set new state based on updated values
    this.setState({ pets: pets })
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
                onChangeType={this.onChangeType} 
                onFindPetsClick={this.fetchPets}
              />
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.onAdoptPet}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
