import React, { Component } from 'react';
// Components
import Pesquisa from '../components/Pesquisa/Pesquisa';
import CampingRecomendado from '../components/ImagemCamping/CampingRecomendado';
// CSS
import './css/HomePage.css'
// Images
import campingIMG from '../components/Pesquisa/images/camp.jpg';
import Menu from '../components/Menu/Menu';


class HomePage extends Component {
    render() {
        return (
            <div className="home-page">
            <Menu />
                <Pesquisa />
                <section className="camping-ads">
                    <div className="caixa">
                        <h2 style={{ color: '#6EBF00' }}>Recomendado</h2>
                        <div className="recomendado">
                            <CampingRecomendado image={campingIMG} title={'Acampamento das Comadres'} />
                            <CampingRecomendado image={campingIMG} title={'Acampamento das Comadres'} />
                            <CampingRecomendado image={campingIMG} title={'Acampamento das Comadres'} />
                        </div>

                        <h2 style={{ color: '#6EBF00' }}>Mais visitados</h2>
                        <div className="recomendado">
                            <CampingRecomendado image={campingIMG} title={'Acampamento das Comadres'} />
                            <CampingRecomendado image={campingIMG} title={'Acampamento das Comadres'} />
                            <CampingRecomendado image={campingIMG} title={'Acampamento das Comadres'} />
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default HomePage;