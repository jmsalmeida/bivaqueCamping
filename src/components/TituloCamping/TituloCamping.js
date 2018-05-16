import React, { Component } from 'react';
import './TituloCamping.css';

import estrelas from './images/5estrelas.png';

class TituloCamping extends Component {
    render(){
        let titulo = this.props.titulo;
        let cidade = this.props.cidade;
        return(
            <div className="titulo-camping">
                <h2>{titulo}</h2>
                <p>{cidade}</p>
                <img src={estrelas}/>
            </div>
        );
    }
}

export default TituloCamping;