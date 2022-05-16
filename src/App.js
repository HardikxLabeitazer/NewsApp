import './App.css';
import React, { Component } from 'react'
import NavBar from './components/navbar/NavBar';
import MainTop from './components/maintop/MainTop';
import NewsBody from './components/newsbody/NewsBody';
import {BrowserRouter} from 'react-router-dom'
import { Route } from 'react-router';
import { Routes } from 'react-router';

export class App extends Component {
   
  
    
  render() {
  let pageResults=9
    return (
      <>
      <BrowserRouter>
      
      <NavBar/>
      <MainTop/>
      
     
        <Routes>
           
          <Route exact path="/" element={<NewsBody pageResults={pageResults} country="in" category="science" /> }/>
          <Route exact path="/politics" element={<NewsBody pageResults={pageResults} country="in" category="politics" /> }/>
          <Route exact path="/science" element={<NewsBody pageResults={pageResults} country="in" category="science" /> }/>
          <Route exact path="/technology" element={<NewsBody pageResults={pageResults} country="in" category="technology" /> }/>
          <Route exact path="/business" element={<NewsBody pageResults={pageResults} country="in" category="business" /> }/>
          <Route exact path="/entertainment" element={<NewsBody pageResults={pageResults} country="in" category="entertainment" /> }/>
          <Route exact path="/sports" element={<NewsBody pageResults={pageResults} country="in" category="sports" /> }/>
        </Routes>
      </BrowserRouter>
      </>
    )
  }
}

export default App