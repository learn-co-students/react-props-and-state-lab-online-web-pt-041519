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
    // console.log(this.state)
  }

  onChangeType = ({ target: { value } }) => {
    this.setState({ filters: { ...this.state.filters, type: value } });
  }

  onAdoptPet = (id) => {
    // map thru the current states pets array
    const pets = this.state.pets.map(pet => {
      // if the searched pets id matches the curent states' id
      if (id === pet.id) {
        // return a shallow copy of the pet with the isAdopted key changed to true
        return {...pet, isAdopted: true}
      }
    })
    // set the state with that pet
    this.setState({ pets: pets });
  }

  fetchPets = () => {
    let url = '/api/pets'

    if (this.state.filters.type != 'all') {
      url += `?type=${this.state.filters.type}`
    }

    fetch(url)
    .then(resp => resp.json())
    .then(pets => this.setState({ pets: pets }))
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
                onChangeType = { this.changeType }
                onFindPetsClick = { this.fetchPets }
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
