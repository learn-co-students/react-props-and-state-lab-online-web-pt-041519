import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {

  petCard = () => {
    return this.props.pets.map(petData => (
      <Pet 
      pet = {petData}
      onAdoptPet = {this.props.onAdoptPet}
      key={petData.id}
      />
    )) 
  }

  render() {
    return <div className="ui cards">    
      {this.petCard()}
    </div>
  }
}

export default PetBrowser
