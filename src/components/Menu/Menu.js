import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';
import logo from './images/logo.png';

class Menu extends Component {

    AbrirMenu() {
        
        document.getElementsByClassName("opitions").style.display = "flex";
    }

    render() {
        return (
            <header>
                <nav >
                    <div>
                        <img src={logo} alt="logo" />
                    </div>

                    <div class="opitions">
                        <a href="#">Cadastre seu camping</a>
                        <Link to="/dicas"><a href="#">Dicas</a></Link>
                        <a href="#">Entrar</a>
                    </div>
                    <span class="menu600"><i class="fas fa-bars"></i></span>
                </nav>
            </header>
        );
    }
}

export default Menu;
