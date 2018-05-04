import React, { Component } from 'react';
import './Regras.css';

class Regras extends Component {
    render(){
        let regras = this.props.regras;
        return(
            <div>
                <p>{regras}</p>
            </div>
        );
    }
}

export default Regras;