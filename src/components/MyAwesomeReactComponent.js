import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


const MyAwesomeReactComponent = () => (
  <MuiThemeProvider>
  <RaisedButton label="Default" />
  </MuiThemeProvider>
);

export default MyAwesomeReactComponent;
