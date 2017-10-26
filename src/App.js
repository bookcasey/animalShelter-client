import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from './actions';

import Pet from './Pet';
import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(actions.fetchCat());
    this.props.dispatch(actions.fetchDog());
  }
  
  render() {
    return (
      <div className="App">
        <h2>Cat:</h2>
        <Pet {...this.props.cat}/>
        <h2>Dog:</h2>
        <Pet {...this.props.dog}/>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
      cat: state.cat,
      dog: state.dog
  }
}

export default connect(mapStateToProps)(App);
