import React, {Component} from 'react'
import {Router, Route, browserHistory} from 'react-router'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import {muiTheme} from '../lib/ui-helpers/mui-theme'
import Site from '../containers/Site'
import Home from './Home'
import SignedOut from './SignedOut'
import Problems from './prototype1/Problems'

class App extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
      <Router history={browserHistory}>
        <Route component={Site}>
          <Route path="/" component={Home} />
          <Route path="/p1" component={Problems} />
          <Route path="/signedOut" component={SignedOut} />
          {/* <Route onEnter={requireAuth}> */}
            {/* Place all authenticated routes here */}
          {/* </Route> */}
        </Route>
      </Router>
      </MuiThemeProvider>
    )
  }
}

export default App;
