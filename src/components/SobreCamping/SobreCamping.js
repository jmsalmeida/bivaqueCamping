import React, { Component } from 'react';
import './SobreCamping.css';

class SobreCamping extends Component {
    render(){
        let sobre = this.props.sobre;
        return(
            <div>
                <p>{sobre}</p>
            </div>
        );
    }
}

export default SobreCamping;