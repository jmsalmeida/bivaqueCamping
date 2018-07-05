import React, { Component } from 'react';
import './FormularioLogin.css';

class FormularioLogin extends Component {
  render() {
    return (
      <div className="formulario-login center">
        <div className="container">
          <h2>Já tem uma conta? Faça seu login</h2>
          <button className="social-button">
            <i className="fab fa-facebook-square"></i>
            <span>Entrar com o Facebook</span>
          </button>
          <button className="social-button">
            <i className="fab fa-google-plus-square"></i>
            <span>Entrar com o Google</span>
          </button>
          <h3>ou</h3>
          <form className="form-login">
            <input type="email" placeholder="Digite seu e-mail" />
            <input type="password" placeholder="Digite sua senha" />
            <button className="social-button">Entrar</button>
          </form>
        </div>
      </div>
    );
  }
}

export default FormularioLogin;