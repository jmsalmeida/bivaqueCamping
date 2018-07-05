import React, { Component } from 'react';
// CSS
import './css/HomePage.css'
// Components
import Pesquisa from '../components/Pesquisa/Pesquisa';
import CampingRecomendado from '../components/ImagemCamping/CampingRecomendado';
import Menu from '../components/Menu/Menu';
import Modal from '../components/Modal/Modal';
// Images
import camping1 from './images/campings/1.jpg';
import camping2 from './images/campings/2.jpg';
import camping3 from './images/campings/3.jpg';
import camping4 from './images/campings/4.jpg';
import camping5 from './images/campings/5.jpg';
import camping6 from './images/campings/6.jpg';



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

                <Menu alternarModal={this.alternarModal} />
                
                <Modal ativo={this.state.modalAtivo} alternarModal={this.alternarModal}/>
                <Pesquisa />
                <section className="camping-ads">
                    <div className="caixa">
                        <h2 style={{ color: '#6EBF00' }}>Recomendado</h2>
                        <div className="recomendado">
                            <span className="setas"><i class="fas fa-angle-left"></i></span>
                            <CampingRecomendado image={camping1} title={'Camping Chapéu de sol'} />
                            <CampingRecomendado image={camping2} title={'Camping do Cacau'} />
                            <CampingRecomendado image={camping3} title={'Camping do Mazinho'} />
                            <span className="setas"><i class="fas fa-angle-right"></i></span>
                        </div>

                        <h2 style={{ color: '#6EBF00' }}>Mais visitados</h2>
                        <div className="recomendado">
                            <span className="setas"><i class="fas fa-angle-left"></i></span>
                            <CampingRecomendado image={camping4} title={'Camping e Pousada Carrion'} />
                            <CampingRecomendado image={camping5} title={'Camping Pé na areia'} />
                            <CampingRecomendado image={camping6} title={'Camping São José'} />
                            <span className="setas"><i class="fas fa-angle-right"></i></span>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default HomePage;