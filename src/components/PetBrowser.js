import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {

  handleAdoptPet = () => {
  }


  render() {
    return this.props.pets.map((pet) => <div className="ui cards"><Pet pet={pet}/></div>)
  }
}

export default PetBrowser
