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

  getPets = () => {
    if (this.state.filters.type === "all") {
      fetch("/api/pets")
      .then(res => res.json())
      .then((result) => {
          this.setState({
              pets: result
          });
        },
      )
    } else if (this.state.filters.type === "cat") {
      fetch("/api/pets?type=cat")
      .then(res => res.json())
      .then((result) => {
          this.setState({
              pets: result
          });
        },
      )
    } else if (this.state.filters.type === "dog") {
      fetch("/api/pets?type=dog")
      .then(res => res.json())
      .then((result) => {
          this.setState({
              pets: result
          });
        },
      )
    } else if (this.state.filters.type === "micropig") {
      fetch("/api/pets?type=micropig")
      .then(res => res.json())
      .then((result) => {
          this.setState({
              pets: result
          });
        },
      )
    }
  }

  handleFilterSelection = event => {
    this.setState({
      filters: {
        ...this.state.filters, type: event.target.value 
      }
    })
  }

  handleAdopt = (id) => {
    let altered_pets = this.state.pets.map(pet => {
      if (pet.id === id) {
        return { ...pet, isAdopted: true }
      } else {
        return pet
      }      
    })
    this.setState({pets: altered_pets})
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
              <Filters onFindPetsClick={this.getPets} onChangeType={this.handleFilterSelection} />
            </div>
            <div className="twelve wide column">
              <PetBrowser onAdoptPet={this.handleAdopt} pets={this.state.pets} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
