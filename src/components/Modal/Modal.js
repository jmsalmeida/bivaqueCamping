import React, { Component } from 'react';
// CSS
import './Modal.css';

import ControladorLoginCadastro from '../ControladorLoginCadastro/ControladorLoginCadastro';
import ConteudoModalLoginCadastro from '../ConteudoModalLoginCadastro/ConteudoModalLoginCadastro';

class Modal extends Component {
    componentWillMount = () => {
        this.setState({atual: ""});
    }
    
    abrirLogin = () => {
        this.setState({ atual: "login" });
    }

    abrirCadastro = () => {
        this.setState({ atual: "cadastro" });
    }

    render() {
        
        let modalCSS = 'modal-style';

        if (this.props.ativo) {
            modalCSS += ' ativo';
        }

        return (
            <div>
                <div className="caixa">
                    <div className={modalCSS}>
                        <ControladorLoginCadastro
                            login={this.abrirLogin}
                            cadastro={this.abrirCadastro}
                        />
                        <ConteudoModalLoginCadastro tela={this.state.atual}/>

                        {/* <div className="fechar">
                            <a onClick={this.props.alternarModal}><i class="fas fa-times"></i></a>
                        </div> */}
                    </div>
                </div>
            </div>
        );
    }
}

export default Modal;