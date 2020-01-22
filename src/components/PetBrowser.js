import React from 'react'
import Pet from './Pet'

class PetBrowser extends React.Component {

  // Map Pet element for each pet in list 
  // petsList = () => {
  //   console.log(this.props)
  //   this.props.pets.map(pet => (
  //     <Pet pet={pet} key={pet.id} onAdoptPet={this.props.onAdoptPet} />
  //   ))
  // }

  render() {

    const petsList = this.props.pets.map(pet => (
      <Pet pet={pet} key={pet.id} onAdoptPet={this.props.onAdoptPet} />
    ))

    return <div className="ui cards">{petsList}</div>
  }
}

export default PetBrowser
