import React, { Component } from 'react';
// CSS
import './css/InfoCampingPage.css';
// Components
import CarouselFotosCamping from '../components/CarouselFotosCamping/CarouselFotosCamping';
import SobreCamping from '../components/SobreCamping/SobreCamping';
import TituloCamping from '../components/TituloCamping/TituloCamping';
// Icons
import wireless from '../icons/wifi.svg'
import InfoCampingIcon from '../components/InfoCampingImage/InfoCampingIcon';

class InfoCampingPage extends Component {
    render() {
        let sobreTxt = 'A Fazenda das Pedras já tem 38 anos de atividade turistica, administrada pelas filhas de Ditinha e Luizinho (já falecidos).Possui sessenta chalés e oferece comodidade e contato com a natureza, além de restaurante (inaugurado em 1983), lanchonete, área de camping e Day Use para grupos da melhor idade e escolas. Está apta a realizar eventos coorporativos, formaturas e casamentos, com competência e criatividade.'
        return (
            <div className="info-page">
                <CarouselFotosCamping />
                <div className="container">
                    <TituloCamping titulo="Camping das pedras" cidade="Itu - São Paulo" />
                    <h3>O espaço</h3>
                    <SobreCamping sobre={sobreTxt} />
                    <div className="info">
                        <div className="left-column">
                        <h3>Comodidades</h3>
                            <div className="comod-icons">
                                <InfoCampingIcon icon={wireless}/>
                                <InfoCampingIcon icon={wireless}/>
                                <InfoCampingIcon icon={wireless}/>
                            </div>
                            <h3>Regras</h3>
                            <div>
                                
                            </div>
                        </div>
                        <div className="y-bar"></div>
                        <div className="right-column">
                        <h3>Proximidades</h3>
                            <div className="comod-icons">
                                <InfoCampingIcon icon={wireless}/>
                                <InfoCampingIcon icon={wireless}/>
                                <InfoCampingIcon icon={wireless}/>
                            </div>
                            <div>
                                <h3>Como chegar</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default InfoCampingPage;