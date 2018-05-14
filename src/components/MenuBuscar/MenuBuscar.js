import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './MenuBuscar.css';
import logo from './images/logo.png';

class MenuBuscar extends Component {

    AbrirMenu() {
        document.getElementsByClassName("opitions").style.display = "flex";
    }

    render() {
        return (
            <header>
                <nav className="menu-buscar">
                    <Link to="/"><img src={logo} alt="logo" /></Link>
                    <div class="busca">
                        <input type="search" placeholder="Buscar..."></input>
                        <i class="fa fa-search"></i>
                    </div>
                    <div class="opcoes">
                        <a>Cadastre seu camping</a>
                        <a>Cadastre-se</a>
                        <a>Entrar</a>
                    </div>
                    <span class="menu600"><i class="fas fa-bars"></i></span>
                </nav>
            </header>
        );
    }
}

export default MenuBuscar;