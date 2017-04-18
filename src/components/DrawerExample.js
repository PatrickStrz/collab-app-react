import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';

export default class DrawerExample extends React.Component {

  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  handleToggle = () => this.setState({open: !this.state.open});

  render() {
    return (
      <div>
        <RaisedButton
          label="Toggle Drawer"
          onTouchTap={this.handleToggle}
        />
        <Drawer open={this.state.open}>
          <MenuItem>Menu Item</MenuItem>
          <MenuItem>Menu Item 2</MenuItem>
          <MenuItem>Menu Item 3</MenuItem>
          <MenuItem>Menu Item 4</MenuItem>
          <MenuItem>Menu Item 5</MenuItem>
          <MenuItem>Menu Item 6</MenuItem>
          <MenuItem>Menu Item 7</MenuItem>
          <MenuItem>Menu Item 8</MenuItem>
          <MenuItem>Menu Item 9</MenuItem>
          <MenuItem>Menu Item 10</MenuItem>
          <MenuItem>Menu Item 11</MenuItem>
          <MenuItem>Menu Item 12</MenuItem>
          <MenuItem>Menu Item 13</MenuItem>
          <MenuItem>Menu Item 14</MenuItem>
          <MenuItem>Menu Item 15</MenuItem>
          <MenuItem>Menu Item 16</MenuItem>
          <MenuItem>Menu Item 17</MenuItem>
          <MenuItem>Menu Item 18</MenuItem>
          <MenuItem>Menu Item 19</MenuItem>
          <MenuItem>Menu Item 20</MenuItem>
          <MenuItem>Menu Item 21</MenuItem>
          <MenuItem>Menu Item 22</MenuItem>
        </Drawer>
      </div>
    );
  }
}
