import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import promiseMiddleware from 'redux-promise';
import reduxThunk from 'redux-thunk'
import App from './components/App'
import './index.css'
import rootReducer from './reducers'
//for material-ui onclick to work
import injectTapEventPlugin from 'react-tap-event-plugin';



const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(promiseMiddleware, reduxThunk)))

// const store = createStoreWithMiddleware()
// const createStoreWithMiddleware = applyMiddleware(reduxPromise)(createStore);
// const store = createStoreWithMiddleware(rootReducer);

injectTapEventPlugin()

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
