import React, { Component } from 'react';
// CSS

import Login from '../Login/Login';
import Cadastro from '../Cadastro/Cadastro';

class ConteudoModalLoginCadastro extends Component {
  render() {

    if (this.props.tela == 'login') {
      return (
        <Login />
      );
    } 
    else if (this.props.tela == 'cadastro') {
      return (
        <Cadastro />
      );
    }
    return (
      <div className="conteudo-modal-login-cadastro">

      </div>
    );
  }
}

export default ConteudoModalLoginCadastro;