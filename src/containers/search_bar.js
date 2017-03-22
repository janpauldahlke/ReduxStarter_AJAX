import React, { Component } from 'react';
import { connect} from 'react-redux';
import { bindActionCreators } from 'redux';

//actions
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {

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
    this.onFormSubmit= this.onFormSubmit.bind(this);
  }

  //pass (vanilla) event handler
  onInputChange(event) {

    //console.log(event.target.value);
    this.setState({ term: event.target.value});
  }

  //guve onSubmit to form to get control of <form> behavior
  onFormSubmit(event) {
    //preventDefault
    event.preventDefault();
    //fetch data here later
    //here now on keydown/submit
    //see here how to pass arg to fetchWeather
    this.props.fetchWeather(this.state.term);
    this.setState({term: ''});
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

//connect redux and react-router
function mapDispatchToProps ( dispatch ) {
  return bindActionCreators({ fetchWeather }, dispatch);
}

                      //null, cause mapDispatch needs to be 2nd arg
                      // reminder, due syntax miserable 5min bug connect(state, dispatch)(Component)
export default connect(null, mapDispatchToProps)(SearchBar);


//-----------------
/*TODO
  refactor form into a controlled field, where
  value of input is set by state of the Component
*/

/*TODO
  prevent standard html <form> behavior to post on enter
  why use form: form brings some advantages, cuz button and enter are onSubmit binded, so we do not need to wirte it ourslfs
*/

/*TODO
  wire action creator with search bar
*/

/*TODO
  integrate react-spark-lines
    https://github.com/borisyankov/react-sparklines
  map to city props
*/
