import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../../css/Auxiliares.css';
import './css/Pesquisa.css';

class Pesquisa extends Component {
    render() {
        return (

            <div className="container">
                <div className="caixa-pesquisa">
                    <h2>Encontre o camping ideal para sua viagem</h2>
                    <form>
                        <input type="text" id="search" name="search" placeholder="Digite sua busca (estado, cidade, ponto turístico...)" />
                        <div>
                            <input type="radio" className="btn-radio" id="campista" name="campista" value="campista" />Sou campista
                                <input type="radio" className="btn-radio" id="nao-campista" name="nao-campista" />Não campista
                            </div>
                    </form>
                    <Link to="/camping-search"><button className="btn-buscar">BUSCAR</button></Link>
                </div>
                <a>Desejo cadastrar o meu camping!</a>
            </div>
        );
    }
}

export default Pesquisa;