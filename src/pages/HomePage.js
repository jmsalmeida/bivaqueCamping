import React, { Component } from 'react';
// Components
import Pesquisa from '../components/Pesquisa/Pesquisa';
import CampingRecomendado from '../components/ImagemCamping/CampingRecomendado';
// CSS
import './css/HomePage.css'
// Images
import campingIMG from '../components/Pesquisa/images/camp.jpg';
import Menu from '../components/Menu/Menu';
import Modal from '../components/Modal/Modal';

class HomePage extends Component {
    componentWillMount = () => {
        this.setState({modalAtivo: false});
    }
    
    alternarModal = () => {
        let ativo = !this.state.modalAtivo;

        this.setState({modalAtivo: ativo});
    }

    render() {
        return (
            <div className="home-page">
                <Menu alternarModal={this.alternarModal}/>
                <Modal ativo={this.state.modalAtivo} />
                <Pesquisa />
                <section className="camping-ads">
                    <div className="caixa">
                        <h2 style={{ color: '#6EBF00' }}>Recomendado</h2>
                        <div className="recomendado">
                            <span className="setas"><i class="fas fa-angle-left"></i></span>
                            <CampingRecomendado image={campingIMG} title={'Acampamento das Comadres'} />
                            <CampingRecomendado image={campingIMG} title={'Acampamento das Comadres'} />
                            <CampingRecomendado image={campingIMG} title={'Acampamento das Comadres'} />
                            <span className="setas"><i class="fas fa-angle-right"></i></span>
                        </div>

                        <h2 style={{ color: '#6EBF00' }}>Mais visitados</h2>
                        <div className="recomendado">
                            <span className="setas"><i class="fas fa-angle-left"></i></span>
                            <CampingRecomendado image={campingIMG} title={'Acampamento das Comadres'} />
                            <CampingRecomendado image={campingIMG} title={'Acampamento das Comadres'} />
                            <CampingRecomendado image={campingIMG} title={'Acampamento das Comadres'} />
                            <span className="setas"><i class="fas fa-angle-right"></i></span>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default HomePage;