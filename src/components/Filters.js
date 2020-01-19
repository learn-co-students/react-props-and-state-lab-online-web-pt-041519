import React from 'react'

class Filters extends React.Component {
  constructor(props){
    super()
    this.state = {
      filter: "all"
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.onChangeType(e.target.value)
  }

  handleChange = (e) =>{
    e.preventDefault()
    this.setState({
      filter: e.target.value
    })
  }

  render() {
    return (
      <div className="ui form">
        <h3>Animal type</h3>
        <div className="field">
          <select value={this.state.filter} onChange={this.props.onChangeType} name="type" id="type">
            <option value="all">All</option>
            <option value="cat">Cats</option>
            <option value="dog">Dogs</option>
            <option value="micropig">Micropigs</option>
          </select>
        </div>

        <div className="field">
          <button className="ui secondary button" onClick={this.props.onFindPetsClick}>Find pets</button>
        </div>
      </div>
    )
  }
}

export default Filters
