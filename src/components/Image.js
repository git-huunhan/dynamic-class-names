import React, { Component } from 'react';
import './Image.css';

class Image extends Component{
  render(){
    // const { item } = this.props;
    let className = 'Image';

    const imageClick = () => {
      alert('Hihi');
    };

    return(
      <tr>
        <td className={className}><img src={this.props.item.col1} alt='img-1' onClick={()=>imageClick()}></img></td>
        <td className={className}><img src={this.props.item.col2} alt='img-2' onClick={()=>imageClick()}></img></td>
        <td className={className}><img src={this.props.item.col3} alt='img-3' onClick={()=>imageClick()}></img></td>
      </tr>
    );
  }
}

export default Image;