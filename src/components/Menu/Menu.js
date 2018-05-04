import React, { Component } from 'react';
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
                        <a href="#">Cadastre-se</a>
                        <a href="#">Entrar</a>
                    </div>
                    <span class="menu600"><i class="fas fa-bars"></i></span>
                </nav>
            </header>
        );
    }
}

export default Menu;
