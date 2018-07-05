import React, { Component } from 'react';
// CSS

import FormularioLogin from '../FormularioLogin/FormularioLogin';
import FormularioCadastro from '../FormularioCadastro/FormularioCadastro';

class ConteudoModalLoginCadastro extends Component {
  render() {

    if (this.props.tela == 'login') {
      return (
        <FormularioLogin />
      );
    } 
    else if (this.props.tela == 'cadastro') {
      return (
        <FormularioCadastro />
      );
    }
  }
}

export default ConteudoModalLoginCadastro;