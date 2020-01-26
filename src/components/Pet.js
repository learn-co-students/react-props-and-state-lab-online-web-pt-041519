import React from 'react'

class Pet extends React.Component {

  displayGender() {
    return this.props.pet.gender === "female" ? '♀' : '♂'
  }

  adopt = () => {
    this.props.onAdoptPet(this.props.pet.id)
  }

  determineButton = () => {
    if (this.props.pet.isAdopted) {
      return <button className="ui disabled button" onClick={this.adopted}>Already adopted</button>
    } else {
      return <button className="ui primary button" onClick={this.adopt}>Adopt pet</button>
    }
  }

  render() {
    return (
      <div id={this.props.pet.id} className="card">
        <div className="content">
          <a className="header">
            {this.displayGender()}
            {this.props.pet.name}
          </a>
          <div className="meta">
            <span className="date">{this.props.pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.pet.age}</p>
            <p>Weight: {this.props.pet.weight}</p>
          </div>
        </div>
        <div className="extra content">
          {this.determineButton()}
        </div>
      </div>
    )
  }
}

export default Pet
