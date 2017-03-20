import React, { Component } from 'react';

export default class SearchBar extends Component {

  render () {
    return(
      <form className="input-group">
        <p>lorem ipsum from src/containers/search_bar.js</p>
        <input />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">
            search
          </button>
        </span>
      </form>
    );
  }
}
