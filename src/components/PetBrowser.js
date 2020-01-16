import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  render() {
  	if (this.props.pets) {
	  	const petComponents = this.props.pets.map((petObj, i) => {
	  		return <Pet key={i} pet={petObj} onAdoptPet={this.props.onAdoptPet} />
	  	})  	
	    return (
	    	<div className="ui cards">{petComponents}</div>
			)	  		
  	}
  }
}

export default PetBrowser
