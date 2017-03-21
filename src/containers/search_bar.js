import React, { Component } from 'react';

export default class SearchBar extends Component {

  constructor(props) {
    super(props);

    this.state= { term: ''};

    //bind context of onInputChange
                          //right handed this is instance of SearchBar
    //replace this of method with new instance this
    //esoteric sh1t!
    /*
      1. take the existing function
      2. bind this
      3. replace left handed
      => we kind of overwrting this local method here

      //wieso???

      https://stackoverflow.com/questions/42902167/bindings-can-someone-help-me-to-get-this-right
      //read here
      https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_objects/Function/bind
    */



    this.onInputChange = this.onInputChange.bind(this);
  }

  //pass (vanilla) event handler
  onInputChange(event) {

    console.log(event.target.value);
    this.setState({ term: event.target.value});
  }

  //guve onSubmit to form to get control of <form> behavior
  onFormSubmit(event) {
    //preventDefault
    event.preventDefault();

    //fetch data here later
  }


  render () {
    return(
      <form
        onSubmit={ this.onFormSubmit }
        className="input-group">

        <input
          placeholder="forecast your city"
          className="form-control"
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

/*TODO
  prevent standard html <form> behavior to post on enter
  why use form: form brings some advantages, cuz button and enter are onSubmit binded, so we do not need to wirte it ourslfs
*/
