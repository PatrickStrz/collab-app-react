import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import LinearProgress from 'material-ui/LinearProgress'

const LoadingBar = () => (
  <MuiThemeProvider>
    <LinearProgress mode="indeterminate" />
  </MuiThemeProvider>
)
export default LoadingBar
