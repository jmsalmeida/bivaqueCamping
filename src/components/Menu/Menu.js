import React, { Component } from 'react';
import './Menu.css';

// Images
import logo from './images/bivaque-logo.png';

class Menu extends Component {
    render(){
        return(
            <header className="header">
                <nav className="menu-desktop">
                    <img src={logo}/>
                    <ul>
                        <a>Cadastre seu camping</a>
                        <a>Dicas</a>
                        <a onClick={this.props.alternarModal}>Entrar</a>
                    </ul>
                </nav>
            </header>
        );
    }
}

export default Menu;