import React, { Component } from 'react';

class Header extends Component{
  render(){
    return(
      <tr>
        <th>{this.props.item.col1}</th>
        <th>{this.props.item.col2}</th>
        <th>{this.props.item.col3}</th>
      </tr>
    );
  }
}

export default Header;