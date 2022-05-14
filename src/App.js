import './App.css';
import React, { Component } from 'react'
import NavBar from './components/navbar/NavBar';
import MainTop from './components/maintop/MainTop';
import NewsBody from './components/newsbody/NewsBody';


export class App extends Component {
   
  
    
  render() {
  let pageResults=9
    return (
      <>
      <NavBar/>
      <MainTop/>
      <NewsBody pageResults={pageResults} />
      
      </>
    )
  }
}

export default App