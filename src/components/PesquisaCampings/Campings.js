import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CampingRecomendado from '../home/CampingRecomendado';
import './css/Camping.css'
import camping from '../home/images/camp.jpg';


class Campings extends Component {
    render() {
        return (
            <div className="campings">
                <div className="container">
                    
                    <CampingRecomendado image={camping} title={'Acampamento das Comadres'} />
                    <CampingRecomendado image={camping} title={'Acampamento das Comadres'} />
                    <CampingRecomendado image={camping} title={'Acampamento das Comadres'} />

                </div>
            </div>
        )
    }
}

export default Campings;