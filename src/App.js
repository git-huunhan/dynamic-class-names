import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Image from './components/Image';

class App extends Component {
  constructor(){
    super();
    this.header = [
      {col1: 'Image column 1', col2: 'Image column 2', col3: 'Image column 3'}
    ];

    this.image = [
      {col1: 'http://bit.ly/3ayPusa', col2: 'http://bit.ly/3ayPusa', col3: 'http://bit.ly/3ayPusa'},
      {col1: 'http://bit.ly/3ayPusa', col2: 'http://bit.ly/3ayPusa', col3: 'http://bit.ly/3ayPusa'},
      {col1: 'http://bit.ly/3ayPusa', col2: 'http://bit.ly/3ayPusa', col3: 'http://bit.ly/3ayPusa'}
    ]
  }

  render(){
    return (
      <div className="App">
        <h2>Table gallery</h2>
        <table>
          {
            this.header.map((item, index) =>
              <Header key={index} item={item}/>
            )
          }
          {
            this.image.map((item, index) =>
              <Image key={index} item={item}/>
            )
          }
        </table>
      </div>
    );
  }
}

export default App;
