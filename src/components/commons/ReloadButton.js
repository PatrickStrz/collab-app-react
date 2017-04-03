import React from 'react'
import RefreshIndicator from 'material-ui/RefreshIndicator'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'


const style = {
  container: {
    position: 'relative',
  },
  refresh: {
    display: 'inline-block',
    position: 'relative',
  },
};

const RefreshIndicatorExampleSimple = ({isLoading, onClick}) => {

  const status = isLoading ? "loading" : "ready"
  console.log(status)
  return(
  <button onClick={onClick}>
    <MuiThemeProvider>

    <RefreshIndicator

      percentage={100}
      size={70}
      left={175}
      top={0}
      color="red" // Overridden by percentage={100}
      status={status}
      style={style.refresh}
    />
    </MuiThemeProvider>
  </button>

  )
}

export default RefreshIndicatorExampleSimple
