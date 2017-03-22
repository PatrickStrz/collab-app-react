import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
// import reduxPromise from 'redux-promise';
import promiseMiddleware from 'redux-promise';
import reduxThunk from 'redux-thunk'
import App from './components/App'
import './index.css'
import rootReducer from './reducers'


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(promiseMiddleware, reduxThunk)))

// const store = createStoreWithMiddleware()
// const createStoreWithMiddleware = applyMiddleware(reduxPromise)(createStore);
// const store = createStoreWithMiddleware(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
