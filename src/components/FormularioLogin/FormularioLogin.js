import React, { Component } from 'react';
import './FormularioLogin.css';

class FormularioLogin extends Component {
  render() {
    return (
      <div className="formulario-login">
        <div className="container">
          <h2>Já tem uma conta? Faça seu login</h2>
          <button>
            <i className="fab fa-facebook-square"></i>
            <span>Entrar com o Facebook</span>
          </button>
          <button>
            <i className="fab fa-google-plus-square"></i>
            <span>Entrar com o Google</span>
          </button>
          <p>ou</p>
          <input type="email" placeholder="Digite seu e-mail" />
          <input type="password" placeholder="Digite sua senha" />
          <button>Entrar</button>
        </div>
      </div>
    );
  }
}

export default FormularioLogin;