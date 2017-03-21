//proove existence
console.log('42');

//
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

//import middleware
import ReduxPromise from 'redux-promise';

import App from './components/app';
import reducers from './reducers';
                                      //apply ReduxPromise
const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>
  , document.querySelector('#root'));
