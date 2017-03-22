//grab exportet FETCH_WEATHER type
import { FETCH_WEATHER } from '../actions/index';

export default function ( state = [], action ) {
  //console.log('Action recieved', action);
  //action.payload.data (from JSON)

  switch(action.type) {
    case FETCH_WEATHER :
    //do not ever manipulate an existing array in reducers, but create a new array out of the old one!!
    //concat to give immutabilty to state, that updates here but do not state.push,
      return state.concat([ action.payload.data ]);
      //ES6 sytnax
      //return [ action.payload.datat, ... state]; //compact of create a new array and flatten it correct
  }

  return state;
}
