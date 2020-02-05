import React from 'react'
import Pet from './Pet'

class PetBrowser extends React.Component {
  // Map Pet element for each pet in list 
  petsList = () => {
    return this.props.pets.map(pet => (<Pet pet={pet} key={pet.id} onAdoptPet={this.props.onAdoptPet} />))
  }

  render() {
    return <div className="ui cards">{this.petsList()}</div>
  }
}

export default PetBrowser
