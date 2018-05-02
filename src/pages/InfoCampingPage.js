import React, { Component } from 'react';
import CarouselFotosCamping from '../components/CarouselFotosCamping/CarouselFotosCamping';
import SobreCamping from '../components/SobreCamping/SobreCamping';
import TituloCamping from '../components/TituloCamping/TituloCamping';

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
                </div>

            </div>
        );
    }
}

export default InfoCampingPage;