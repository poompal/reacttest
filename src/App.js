import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MyName from './MyName';

class App extends Component{
  render(){
    return(
      <MyName name="리액트"/>
    );
  }
}

export default App;
