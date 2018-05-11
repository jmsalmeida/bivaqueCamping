import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// CSS
import './css/SearchPage.css'
import CampingRecomendado from '../components/ImagemCamping/CampingRecomendado';
// IMG
import camping from '../components/Pesquisa/images/camp.jpg';
import BtnFilter from '../components/filter/BtnFilter';

class SearchPage extends Component {
    render() {
        return (
            <div className="search-camping">
                <div className="caixa">
                    <section className="search">
                        <div className="filter-buttons">
                            <BtnFilter title="filtro" />
                            <BtnFilter title="filtro" />
                            <BtnFilter title="filtro" />
                            <BtnFilter title="filtro" />
                        </div>

                        <div className="searchs">
                            <Link to="/info-camping">
                                <CampingRecomendado image={camping} title={'Acampamento das Comadres'} />
                            </Link>
                            <CampingRecomendado image={camping} title={'Acampamento das Comadres'} />
                            <CampingRecomendado image={camping} title={'Acampamento das Comadres'} />
                        </div>
                        <div className="searchs">
                            <CampingRecomendado image={camping} title={'Acampamento das Comadres'} />
                            <CampingRecomendado image={camping} title={'Acampamento das Comadres'} />
                            <CampingRecomendado image={camping} title={'Acampamento das Comadres'} />
                        </div>
                        <div className="searchs">
                            <CampingRecomendado image={camping} title={'Acampamento das Comadres'} />
                            <CampingRecomendado image={camping} title={'Acampamento das Comadres'} />
                            <CampingRecomendado image={camping} title={'Acampamento das Comadres'} />
                        </div>
                    </section>
                </div>
            </div>
        );
    }
}

export default SearchPage;