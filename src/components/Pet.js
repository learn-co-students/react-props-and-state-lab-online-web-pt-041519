import React from 'react'

class Pet extends React.Component {

  onAdoptPet = e => {
    this.props.onAdoptPet(this.props.pet.id)
  }

  render() {
    const {name, type, gender, age, weight, isAdopted} = this.props.pet
    return (
      <div className="card">
        <div className="content">
          <div className="header">
            {gender === 'male' ? '♂' : '♀' } {name} 
          </div>
          <div className="meta">
            <span className="date">{type}</span>
          </div>
          <div className="description">
            <p>Age: {age}</p>
            <p>Weight: {weight}</p>
          </div>
        </div>
        <div className="extra content">
          { isAdopted && <button className="ui disabled button">Already adopted</button> }
          { !isAdopted && <button className="ui primary button" onClick={this.onAdoptPet}>Adopt pet</button> }
        </div>
      </div>
    )
  }
}

export default Pet
