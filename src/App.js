import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Pesquisa from './components/home/Pesquisa.js'
import CampingRecomendado from './components/home/CampingRecomendado.js';
import './css/App.css';

import camping from './components/home/images/camp.jpg';
import Campings from './components/PesquisaCampings/Campings.js';
import HomePage from './pages/HomePage.js';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Route path="/" exact component={ () => <HomePage /> } />
        <Route path="/camping-search" exact component={() => <Campings />} />
      </div>


    );
  }
}

export default App;
