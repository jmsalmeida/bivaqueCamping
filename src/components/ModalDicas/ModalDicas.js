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

        return (
            <div>
                <div className={modalDicasCSS}>
                    <IconeDicas dica={bagagem} />
                    <h3>Nome da Modal que abriu</h3>
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