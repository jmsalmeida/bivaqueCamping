import React, { Component } from 'react';
import './ControladorLoginCadastro.css';

class ControladorLoginCadastro extends Component {
  render(){
    return (
      <div className="controlador-login-cadastro">
        <button onClick={this.props.login}>Login</button>
        <button onClick={this.props.cadastro}>Cadastro</button>
      </div>
    );
  }
}

export default ControladorLoginCadastro;