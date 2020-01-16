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

  onChangeType = event => {
    this.setState({
      filters: {
        type: event.target.value
      }
    })
  }

  onFindPetsClick = event => {
    let url = '/api/pets'
    const animalType = this.state.filters.type
    if (animalType === 'cat') {
      url += '?type=cat'
    } else if (animalType === 'dog') {
      url += '?type=dog'
    } else if (animalType === 'micropig') {
      url += '?type=micropig'
    }
    fetch(url)
      .then( response => {
        return response.json()
      })
      .then( resJson => {
        this.setState({
          pets: resJson
        })
    })
  }

  onAdoptPet = (id) => {
    this.state.pets.forEach((pet, i) => {
      if (pet.id === id) {
        let arr = this.state.pets.slice() // non-mutating original array
        arr[i]['isAdopted'] = true // only changing index I need and then applying it to pets array
        this.setState({
          pets: arr
        })
      }
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
              <Filters onChangeType={this.onChangeType} onFindPetsClick={this.onFindPetsClick} />
            </div>
            <div className="twelve wide column">
              <PetBrowser onAdoptPet={this.onAdoptPet} pets={this.state.pets} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
