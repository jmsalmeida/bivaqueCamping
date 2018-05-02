import React, { Component } from 'react';
// CSS
import './css/SearchPage.css'
import CampingRecomendado from '../components/ImagemCamping/CampingRecomendado';
// IMG
import camping from '../components/Pesquisa/images/camp.jpg';
import BtnFilter from '../components/filter/BtnFilter';

class SearchPage extends Component {
    render(){
        return(
            <div className="search-camping">
                <div className="container">
                <div className="filter-buttons">
                    <BtnFilter title="filtro"/>
                    <BtnFilter title="filtro"/>
                    <BtnFilter title="filtro"/>
                    <BtnFilter title="filtro"/>
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
                    <div className="searchs">
                        <CampingRecomendado image={camping} title={'Acampamento das Comadres'} />
                        <CampingRecomendado image={camping} title={'Acampamento das Comadres'} />
                        <CampingRecomendado image={camping} title={'Acampamento das Comadres'} />
                    </div>
                </div>
            </div>
        );
    }
}

export default SearchPage;