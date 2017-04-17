import React,{ Component, PropTypes } from 'react'
import Snackbar from 'material-ui/Snackbar'

class SyncUserAlert extends Component {

  static propTypes = {
    syncUserError: PropTypes.string.isRequired,
  }

  state = { open: this.props.syncUserError ? true : false, }

  componentWillReceiveProps(nextProps){
    if (nextProps.syncUserError){
      this.setState({open:true})
    }
  }

  style = {
    background:'rgb(212, 50, 50)',
    opacity:0.95,
  }

  handleRequestClose = () => this.setState({ open: false, })

  render(){
    return(
        <Snackbar
          bodyStyle={this.style}
          open={this.state.open}
          message={'Error Syncing Profile'}
          autoHideDuration={4000}
          onRequestClose={this.handleRequestClose}
        />
      )
    }
}

export default SyncUserAlert
