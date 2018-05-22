import React, { Component } from 'react';
import './Footer.css';
// IMAGES
import fb from './images/face.png';
import insta from './images/instagram.png';
import tt from './images/twitter.png';
import logo from './images/logo-branco.png'

class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="caixa">
                    <div className="flex">
                        <div>
                            <h3>Bivaque.Inc</h3>
                            <a href="#">Carreiras</a>
                            <a href="#">Imprensa</a>
                            <a href="#">Ajuda</a>
                            <a href="#">Diversidade e Inclusão</a>
                            <a href="#">Dados da Empresa</a>
                        </div>
                        <div>
                            <h3>Bivaque.Inc</h3>
                            <a href="#">Guia de Acampamento</a>
                            <a href="#">Confiança e Segurança</a>
                            <a href="#">Convidar Amigos</a>
                            <a href="#">Viagem</a>
                        </div>
                        <div>
                            <div className="icon-social">
                                <img src={fb}/>
                                <img src={insta}/>
                                <img src={tt}/>
                            </div>
                            <a href="#">Condições</a>
                            <a href="#">Politicas de Privacidade</a>
                            <a href="#">Politicas de uso</a>
                        </div>
                    </div>
                </div>
                <div className="footer2">
                    <img src={logo}/>
                </div>
            </div>
        );
    }
}

export default Footer;