import React from 'react'

class Pet extends React.Component {
  
handleAdoptPet = e => {
  this.props.onAdoptPet(this.props.pet.id)
}

  render() {
    const { pet } = this.props
    const isAdoptedQ = this.props.pet.isAdopted
    // debugger
    const { name, type, gender, age, weight } = pet
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {name} 
            {gender === "female" ? '♀' : '♂'}
            </a>
          <div className="meta">
            <span className="date">{type}</span>
          </div>
          <div className="description">
            <p>Age: {age}</p>
            <p>Weight: {weight}</p>
          </div>
        </div>
        <div className="extra content">

          {isAdoptedQ && <button className="ui disabled button">Already adopted</button>}
          {!isAdoptedQ && <button className="ui primary button" onClick={this.handleAdoptPet}>Adopt pet</button>}
        </div>
      </div>
    )
  }
}

export default Pet
