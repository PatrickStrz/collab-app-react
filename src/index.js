// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './components/App';
// import './index.css';


import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reduxPromise from 'redux-promise';
import App from './components/App'
import './index.css'
import rootReducer from './reducers'


// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );

// let store = createStore(rootReducer)
// let store = createStore(rootReducer, applyMiddleware(promiseMiddleware))
//
// const store = createStoreWithMiddleware()

const createStoreWithMiddleware = applyMiddleware(reduxPromise)(createStore);
const store = createStoreWithMiddleware(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
