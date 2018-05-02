import React, { Component } from 'react';
import './BtnFilter.css';

class BtnFilter extends Component {
    render(){
        let title = this.props.title;

        return (
            <button class="filter">{title}</button>
        );
    }
}

export default BtnFilter;