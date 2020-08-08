import React, { Component } from 'react';

class Image extends Component{
  render(){
    return(
      <tr>
        <td><img src={this.props.url1} alt='img-1'></img></td>
        <td><img src={this.props.url2} alt='img-2'></img></td>
        <td><img src={this.props.url3} alt='img-3'></img></td>
      </tr>
    );
  }
}

export default Image;