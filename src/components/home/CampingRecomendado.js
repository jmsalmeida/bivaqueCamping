import React, { Component } from 'react';
import '../../css/Auxiliares.css';
import './css/CampingRecomendado.css';

class CampingRecomendado extends Component {
    render() {
        let image = this.props.image;
        let title = this.props.title;
        return (

            <div className="imagens">
                <img src={image} />
                <h3>{title}</h3>
            </div>
        );
    }
}

export default CampingRecomendado;