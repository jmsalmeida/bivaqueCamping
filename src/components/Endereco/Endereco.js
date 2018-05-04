import React, { Component } from 'react';
import './Endereco.css';

class Endereco extends Component {
    render(){
        let map = this.props.map;
        let endereco = this.props.endereco;
        return(
            <div className="endereco">
                <iframe src={map} frameborder="0" style={{border:0}}></iframe>
                <p>{endereco}</p>
            </div>
        );
    }
}

export default Endereco;