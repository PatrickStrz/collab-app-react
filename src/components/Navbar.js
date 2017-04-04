import React from 'react'
import AppBar from 'material-ui/AppBar'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

const Navbar = () => (
  <MuiThemeProvider>

    <AppBar
      style={{background:"#262626"}}
      title="Collab App"
      iconClassNameRight="muidocs-icon-navigation-expand-more"
    />
  </MuiThemeProvider>
)

export default Navbar
