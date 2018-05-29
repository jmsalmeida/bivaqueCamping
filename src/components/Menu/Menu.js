import React, { Component } from 'react';
import './Menu.css';
import { Link } from 'react-router-dom';
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
                        <Link to="/dicas"><a>Dicas</a></Link>
                        <a onClick={this.props.alternarModal}>Entrar</a>
                    </ul>
                </nav>
            </header>
        );
    }
}

export default Menu;