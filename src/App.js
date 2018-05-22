import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
// Components
import HomePage from './pages/HomePage.js';
import SearchPage from './pages/SearchPage';
import InfoCampingPage from './pages/InfoCampingPage.js';
import LoginPage from './pages/LoginPage.js';

import Footer from './components/Footer/Footer.js';


class App extends Component {
  render() {
    return (
      <div className="app">
        <Route path="/" exact component={ () => <HomePage /> } />
        <Route path="/camping-search" exact component={ () => <SearchPage /> } />
        <Route path="/info-camping" exact component={ () => <InfoCampingPage /> } />
        <Route path="/login-cadastro" exact component={ () => <LoginPage /> } />
        <Footer/>
      </div>
    );
  }
}

export default App;
