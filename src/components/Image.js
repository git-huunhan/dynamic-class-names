import React, { Component } from 'react';
import './Image.css';

class Image extends Component{
  render(){
    // const { item } = this.props;
    let className = 'Image';

    function imageClick() {
      className += 'Image-size';
    };

    return(
      <tr>
        <td className={ className }><img src={this.props.item.col1} alt='img-1' onClick={imageClick} ></img></td>
        <td className="Image"><img src={this.props.item.col2} alt='img-2'></img></td>
        <td className="Image"><img src={this.props.item.col3} alt='img-3'></img></td>
      </tr>
    );
  }
}

export default Image;