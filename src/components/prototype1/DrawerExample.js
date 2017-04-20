import React from 'react'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import RaisedButton from 'material-ui/RaisedButton'
import IdeaDialog from './IdeaDialog'

export default class DrawerExample extends React.Component {

  // state = {open: this.props.drawerIsOpen}
  state = {open: false}

  // componentWillReceiveProps(nextProps){
  //     this.setState({open:nextProps.drawerIsOpen})
  // }

  // handleToggle = () => this.props.toggleDrawer()
  handleToggle = () => this.setState({open: !this.state.open})
  closeDrawer = () => this.setState({open: false})
  // closeDrawer = () => this.props.closeDrawer()
  //action close drawer

  render() {
    console.log(this.props)
    return (
      <div>
        <RaisedButton
          label="Show Tools!"
          onTouchTap={this.handleToggle}
        />
        <Drawer open={this.state.open} docked={false} onRequestChange={this.closeDrawer} style={{display: this.state.open ? 'block' : 'none' }}>
        {/* <Drawer open={this.state.open} docked={false} onRequestChange={this.closeDrawer}> */}
          <MenuItem>Menu Item</MenuItem>
          {/* <IdeaDialog /> */}
          <MenuItem>Tool 2</MenuItem>
          <MenuItem>Tool 3</MenuItem>
          <MenuItem>Tool 4</MenuItem>
          <MenuItem>Tool 5</MenuItem>
          <MenuItem>Tool 6</MenuItem>
          <MenuItem>Tool 7</MenuItem>
          <MenuItem>Tool 8</MenuItem>
          <MenuItem>Tool 9</MenuItem>
          <MenuItem>Tool 10</MenuItem>
          <MenuItem>Tool 11</MenuItem>
          <MenuItem>Menu Item 12</MenuItem>
          <MenuItem>Tool 13</MenuItem>
          <MenuItem>Tool 14</MenuItem>
          <MenuItem>Tool 15</MenuItem>
          <MenuItem>Tool 16</MenuItem>
          <MenuItem>Tool 17</MenuItem>
          <MenuItem>Tool 18</MenuItem>
          <MenuItem>Tool 19</MenuItem>
          <MenuItem>Tool 20</MenuItem>
          <IdeaDialog />
          <MenuItem>Tool 21</MenuItem>
          <MenuItem>Tool 22</MenuItem>
        </Drawer>
      </div>
    )
  }
}
