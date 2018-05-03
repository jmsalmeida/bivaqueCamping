import React, { Component } from 'react';
// CSS
import './InfoCampingIcon.css';

class InfoCampingIcon extends Component {
    render(){
        let icon = this.props.icon;
        return(
            <div className="info-camping-icon">
                <img src={icon}/>
            </div>
        );
    }
}

export default InfoCampingIcon;