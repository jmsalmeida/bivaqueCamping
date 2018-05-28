import React, { Component } from 'react';
import './css/DicasPage.css';
import Modal from '../components/Modal/Modal';
import IconeDicas from '../components/IconeDicas/IconeDicas';

// Images
import arvore from './images/icone-dicas/arvore.svg';
import seguranca from './images/icone-dicas/seguranca.svg';
import bagagem from './images/icone-dicas/bagagem.svg';

class DicasPage extends Component {
    render() {
        return (
            <div className="dicas">
                <div className="caixa">
                    <h2>Guia do Campista</h2>
                    <p>Olá, seja bem vindo!
Aqui selecionamos algumas dicas para você relembrar ou saber o que é necessário para uma boa viagem sem nenhuma surpresa indesejada no meio da sua viagem.</p>
                    <div className="icones">
                        <IconeDicas dica={arvore} titulo={'Árvore'}/>
                        <IconeDicas dica={seguranca} titulo={'Árvore'}/>
                        <IconeDicas dica={bagagem} titulo={'Árvore'}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default DicasPage;