import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  render() {
    return (<div className="ui cards">
      {this.props.pets.map(petProps => 
      <Pet pet={petProps} key={petProps.id} onAdoptPet={this.props.onAdoptPet}/>
      )}
      </div>)
  }
}

export default PetBrowser
