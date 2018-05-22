import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// CSS
import './css/SearchPage.css'
import CampingRecomendado from '../components/ImagemCamping/CampingRecomendado';
// IMG
import camping from '../components/Pesquisa/images/camp.jpg';
import BtnFilter from '../components/filter/BtnFilter';

// import MenuBuscar from '../components/MenuBuscar/MenuBuscar';

import camping1 from './images/campings/1.jpg';
import camping2 from './images/campings/2.jpg';
import camping3 from './images/campings/3.jpg';
import camping4 from './images/campings/4.jpg';
import camping5 from './images/campings/5.jpg';
import camping6 from './images/campings/6.jpg';
import camping7 from './images/campings/7.jpg';
import camping8 from './images/campings/8.jpg';
import camping9 from './images/campings/9.jpg';

class SearchPage extends Component {
    render() {
        return (
            <div className="search-camping">
                {/* <MenuBuscar/> */}

                <div className="caixa">
                    <section className="search">
                        <div className="filter-buttons">
                            <BtnFilter title="Localização" />
                            <BtnFilter title="Recomendação" />
                            <BtnFilter title="Pontos Turísticos" />
                            <BtnFilter title="Acomodações" />
                        </div>

                        <div className="searchs">
                            <Link to="/info-camping">
                                <CampingRecomendado image={camping1} title={'Camping das Pedras'} />
                            </Link>
                            <CampingRecomendado image={camping2} title={'Camping do Cacau'} />
                            <CampingRecomendado image={camping3} title={'Camping do Mazinho'} />
                        </div>
                        <div className="searchs">
                            <CampingRecomendado image={camping4} title={'Camping e Pousada Carrion'} />
                            <CampingRecomendado image={camping5} title={'Camping Pé na areia'} />
                            <CampingRecomendado image={camping6} title={'Camping São José'} />
                        </div>
                        <div className="searchs">
                            <CampingRecomendado image={camping7} title={'Camping Sunanga'} />
                            <CampingRecomendado image={camping8} title={'Camping World'} />
                            <CampingRecomendado image={camping9} title={'Camping Paineiras'} />
                        </div>
                    </section>
                </div>
            </div>
        );
    }
}

export default SearchPage;