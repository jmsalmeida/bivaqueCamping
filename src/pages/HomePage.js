import React, { Component } from 'react';
import Pesquisa from '../components/home/Pesquisa';
import CampingRecomendado from '../components/home/CampingRecomendado';
import camping from '../components/home/images/camp.jpg';

class HomePage extends Component {
    render() {
        return (
            <div className="home-page">
                <Pesquisa />
                <div className="container">
                    <h2 style={{ color: '#6EBF00' }}>Recomendado</h2>
                    <div className="recomendado">
                        <CampingRecomendado image={camping} title={'Acampamento das Comadres'} />
                        <CampingRecomendado image={camping} title={'Acampamento das Comadres'} />
                        <CampingRecomendado image={camping} title={'Acampamento das Comadres'} />
                    </div>

                    <h2 style={{ color: '#6EBF00' }}>Mais visitados</h2>
                    <div className="recomendado">
                        <CampingRecomendado image={camping} title={'Acampamento das Comadres'} />
                        <CampingRecomendado image={camping} title={'Acampamento das Comadres'} />
                        <CampingRecomendado image={camping} title={'Acampamento das Comadres'} />
                    </div>
                </div>
            </div>
        )
    }
}

export default HomePage;