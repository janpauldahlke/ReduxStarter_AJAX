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
                                      //apply ReduxPromise //solves promises in actions flows them into middleware, if promises, unwrap it, been put in paylod, now actions FETCH_WEATHER has the object bound
const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>
  , document.querySelector('#root'));
