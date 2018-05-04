import React, { Component } from 'react';
// CSS
import './css/InfoCampingPage.css';
// Components
import CarouselFotosCamping from '../components/CarouselFotosCamping/CarouselFotosCamping';
import SobreCamping from '../components/SobreCamping/SobreCamping';
import TituloCamping from '../components/TituloCamping/TituloCamping';
import InfoCampingIcon from '../components/InfoCampingImage/InfoCampingIcon';
import Regras from '../components/Regras/Regras';
import Endereco from '../components/Endereco/Endereco';
// Icons
import wireless from '../icons/wifi.svg'


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
                                <Regras regras="Regra"/>
                                <Regras regras="Regra"/>
                                <Regras regras="Regra"/>
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
                            <h3>Como chegar</h3>
                            <div>
                                <Endereco map="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.2918022210447!2d-45.60759744980426!3d-23.772621184502714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94d27fddd9bdb17f%3A0x38ef438400b23349!2sPorongaba+Camping!5e0!3m2!1spt-BR!2sbr!4v1525439733474" endereco="Rua Dom Gabriel Paulino Bueno Couto, nº 19 Itu-SP"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default InfoCampingPage;