import React, { Component } from 'react';
import './ModalDicas.css';
import IconeDicas from '../IconeDicas/IconeDicas';


// Images
import arvore from '../../pages/images/icone-dicas/arvore.svg';
import seguranca from '../../pages/images/icone-dicas/seguranca.svg';
import bagagem from '../../pages/images/icone-dicas/bagagem.svg';

class ModalDicas extends Component {
    render() {
        let modalDicasCSS = 'modal-dicas';

        if(this.props.ativo){
            modalDicasCSS += ' ativo'
        }

        return (
            <div>
                <div className={modalDicasCSS}>
                    <div className="fechar">
                        <a onClick={this.props.alternarModal}><i className="fas fa-times"></i></a>
                    </div>
                    <IconeDicas dica={bagagem} titulo={'teta'}/>
                    <div className="itens-dicas">
                        <ul>
                            <li>aqui</li>
                            <li>pode</li>
                            <li>ser vários tópicos</li>
                            <li>e pode rolar um scroll</li>
                            <li>mas pode deixar sem scroll</li>
                            <li>e rolar as bolinhas que estão em baixo</li>
                        </ul>
                        <div className="bolinhas-navegar">
                            <div></div>
                            <div></div>
                            <div></div>
                        </div> 
                    </div>
                     
                </div>
            </div>
        );
    }
}

export default ModalDicas;