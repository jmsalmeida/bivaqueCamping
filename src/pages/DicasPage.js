import React, { Component } from 'react';
import './css/DicasPage.css';
import Modal from '../components/Modal/Modal';
import IconeDicas from '../components/IconeDicas/IconeDicas';
import ModalDicas from '../components/ModalDicas/ModalDicas';

// Images
import arvore from './images/icone-dicas/arvore.svg';
import seguranca from './images/icone-dicas/seguranca.svg';
import bagagem from './images/icone-dicas/bagagem.svg';


class DicasPage extends Component {

    componentWillMount = () => {
        this.setState({modalAtivo : false})
    }

    alternarModal = () => {
        let ativo = !this.state.modalAtivo;

        this.setState({modalAtivo: ativo});
    }
    
    render() {
        return (
            <div className="dicas">
                <div className="caixa">
                    <h2>Guia do Campista</h2>
                    <p>Olá, seja bem vindo!<br />
                        Aqui selecionamos algumas dicas para você relembrar ou saber o que é necessário para uma boa viagem sem nenhuma surpresa indesejada no meio da sua viagem.</p>
                    
                    <ModalDicas ativo={this.state.modalAtivo} alternarModal={this.alternarModal}/>

                    <div className="single-icon">
                        <IconeDicas alternarModal={this.alternarModal} dica={bagagem} titulo={'Bagagem'}/>
                        <IconeDicas alternarModal={this.alternarModal} dica={seguranca} titulo={'Segurança'} />
                        <IconeDicas alternarModal={this.alternarModal} dica={arvore} titulo={'Meio Ambiente'} />
                    </div>
                </div>
            </div>
        );
    }
}

export default DicasPage;