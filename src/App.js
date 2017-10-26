import React, { Component } from 'react';
import Pet from './Pet';
import './App.css';

const cat = {
     imageURL:'https://assets3.thrillist.com/v1/image/2622128/size/tmg-slideshow_l.jpg',
     name: "Fluffy",
     gender: 'Female',
     age: "2 yrs",
     breed: "Bengal",
     story: "Thrown on the street"
}

const dog = {
   imageURL:'https://assets3.thrillist.com/v1/image/2622128/size/tmg-slideshow_l.jpg',
   name: "Spot",
   gender: 'Male',
   age: "3 yrs",
   breed: "Soft Coated Wheaten Terrier",
   story: "Found in carboard box"
 }

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>Cat:</h2>
        <Pet {...cat}/>
        <h2>Dog:</h2>
        <Pet {...dog}/>
      </div>
    );
  }
}

export default App;
