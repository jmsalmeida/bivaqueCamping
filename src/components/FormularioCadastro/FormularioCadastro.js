import React, { Component } from 'react';
import './FormularioCadastro.css';

class FormularioCadastro extends Component {
  render(){
    return(
      <div className="formulario-cadastro center">
        <div className="container">
          <h2>Inscreva-se com suas redes sociais</h2>
          <button className="social-button">
            <i className="fab fa-facebook-square"></i>
            <span>Cadastrar com o Facebook</span>
          </button>
          <button className="social-button">
            <i className="fab fa-google-plus-square"></i>
            <span>Cadastrar com o Google</span>
          </button>
          <h2>Inscreva-se com seu E-mail</h2>
          <form className="form-cadastro">
            <input type="email" placeholder="Digite seu e-mail" />
            <input type="text" placeholder="Primeiro Nome"/>
            <input type="text" placeholder="Sobrenome"/>
            <div>
              <input type="text" placeholder="Dia"/>
              <input type="text" placeholder="Mês"/>
              <input type="text" placeholder="Ano"/>
            </div>
            <p>Os outros usuários não verão a sua data de nascimento.</p>
            <input type="password" placeholder="Digite sua senha" />
            <p>Use no minímo 6 caracteres</p>
            <button className="social-button">Cadastrar</button>
          </form>
        </div>
      </div>
    );
  }
}

export default FormularioCadastro;