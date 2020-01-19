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

  updateFilters = ({ target: { value } }) => {
    this.setState({
      ...filters.type,
      type: value
    })
  }

  fetchPets = () => {
    let url  = "/api/pets"
    if(this.state.filters.type != "all"){
      url = url + `?type=${this.state.filters.type}`
    }
    fetch(url).then((resp) => resp.json()).then((myjson) => {
      this.setState({
        pets: myjson
      })})
  }

  handleAdoption = (id) => {
    const pets = this.state.pets.map(p => {
      return p.id === id ? {...p, isAdopted: true } : p
    })
    this.setState({
      pets: pets
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
              <Filters onChangeType={this.updateFilters} onFindPetsClick={this.fetchPets} />
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.handleAdoption} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
