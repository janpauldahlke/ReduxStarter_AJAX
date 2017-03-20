import React, { Component } from 'react';

export default class SearchBar extends Component {

  constructor(props) {
    super(props);

    this.state= { term: ''};
  }

  //pass (vanilla) event handler
  onInputChange(event) {
    console.log(event.target.value);
  }

  render () {
    return(
      <form className="input-group">
        <p>lorem ipsum from src/containers/search_bar.js</p>
        <input
          placeholder="forecast your city"
          className="form-controll"
          value={ this.state.term }
          onChange={ this.onInputChange }
          />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">
            search
          </button>
        </span>
      </form>
    );
  }
}


/*TODO
  refactor form into a controlled field, where
  value of input is set by state of the Component
*/
