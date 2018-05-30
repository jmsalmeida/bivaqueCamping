import React, { Component } from 'react';
import './IconeDicas.css';

class IconeDicas extends Component {
    render(){
        let dica = this.props.dica;
        let titulo = this.props.titulo;

        return(
            <div className="icone-dicas">
                <a onClick={this.props.alternarModal}><img src={dica}/></a>
                <h3>{titulo}</h3>
            </div>
        );
    }
}

export default IconeDicas;