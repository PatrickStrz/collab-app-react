// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './components/App';
// import './index.css';


import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import App from './components/App'
import './index.css'
import rootReducer from './reducers'


// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );

let store = createStore(rootReducer)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
