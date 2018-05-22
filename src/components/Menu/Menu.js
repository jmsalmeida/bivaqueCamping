import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';
import logo from './images/logo.png';

class Menu extends Component {

    render() {
        return (
            <header>
                <nav >
                    <div>
                        <img src={logo} alt="logo" />
                    </div>
                    <div className="options">
                        <Link to="/">
                            <a>Cadastre seu camping</a>
                        </Link>
                            <a onClick={this.props.alternarModal}>Entrar</a>    
                        <Link to="/login-cadastro">
                            <a>Entrar</a>
                        </Link>
                    </div>
                    <span className="menu600"><i className="fas fa-bars"></i></span>
                </nav>
            </header>
        );
    }
}

export default Menu;
