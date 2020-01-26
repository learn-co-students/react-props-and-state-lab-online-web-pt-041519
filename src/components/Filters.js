import React from 'react'

class Filters extends React.Component {

  detectType = () => {
    let options = Array.from(document.querySelectorAll('option'))
    let selected = options.find( o => o.selected )
    if (!!selected) {
      let selection = selected.value
      this.props.onChangeType(selection)
      return selection
    } else { 
      this.props.onChangeType("all")
    }
  }

  handleClick = () => {
    this.props.onFindPetsClick()
  }

  render() {
    return (
      <div className="ui form">
        <h3>Animal type</h3>
        <div className="field">
          <select name="type" id="type" onChange={this.detectType} >
            <option value="all">All</option>
            <option value="cat">Cats</option>
            <option value="dog">Dogs</option>
            <option value="micropig">Micropigs</option>
          </select>
        </div>

        <div className="field">
          <button className="ui secondary button" onClick={this.handleClick}>Find pets</button>
        </div>
      </div>
    )
  }
}

export default Filters
