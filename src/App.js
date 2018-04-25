import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Pesquisa from './components/home/Pesquisa.js'
import CampingRecomendado from './components/home/CampingRecomendado.js';
import './css/Auxiliares.css';
import './css/App.css';

import camping from '/home/james/Development/Mastertech/Academia/DemoDay/bivaque-camping/src/components/home/images/camp.jpg';

class App extends Component {
  render() {
    return (
      <div>
        <section id="home-bg">
          <Pesquisa/>
        </section>

        <div className="container">
          <h2 style={{color: '#6EBF00'}}>Recomendado</h2>
          <div className="recomendado">
            <CampingRecomendado image={camping} title={'Acampamento das Comadres'}/>
            <CampingRecomendado image={camping} title={'Acampamento das Comadres'}/>
            <CampingRecomendado image={camping} title={'Acampamento das Comadres'}/>
          </div>

          <h2 style={{color: '#6EBF00'}}>Mais visitados</h2>
          <div className="recomendado">
            <CampingRecomendado image={camping} title={'Acampamento das Comadres'}/>
            <CampingRecomendado image={camping} title={'Acampamento das Comadres'}/>
            <CampingRecomendado image={camping} title={'Acampamento das Comadres'}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
