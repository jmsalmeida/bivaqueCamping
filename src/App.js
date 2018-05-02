import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
// Components
import HomePage from './pages/HomePage.js';
import SearchPage from './pages/SearchPage';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Route path="/" exact component={ () => <HomePage /> } />
        <Route path="/camping-search" exact component={ () => <SearchPage /> } />
      </div>
    );
  }
}

export default App;
