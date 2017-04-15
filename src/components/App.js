import React, {Component} from 'react';
import {Router, Route, browserHistory} from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import {muiTheme} from '../lib/ui-helpers/mui-theme'
import Site from './Site';
import Home from './Home';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
      <Router history={browserHistory}>
        <Route component={Site}>
          <Route path="/" component={Home} />
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
