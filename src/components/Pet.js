import React from 'react'

class Pet extends React.Component {
  render() {
    //destructure the props
    const { name, type, age, weight, gender, isAdopted, id } = this.props.pet
    //same as above
    // const name = this.props.pet.name
    // const type = this.props.pets.type
    // const age = this.props.pets.age
    // const weight = this.props.pets.weight 
    const { onAdoptPet } = this.props  
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {/*'♀' OR '♂' */}
            {gender == "female" ? ' ♀': ' ♂' }
            {name}
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
          <button className="ui disabled button">Already adopted</button>
          <button onClick={() => onAdoptPet(id)} className="ui primary button">Adopt pet</button>
        </div>
      </div>
    )
  }
}

export default Pet
