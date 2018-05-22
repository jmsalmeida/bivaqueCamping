import React, { Component } from 'react';
import './css/DicasPage.css';
import Modal from '../components/Modal/Modal';

class DicasPage extends Component {
    render(){
        return(
            <div className="dicas">
                <Modal/>
            </div>
        );
    }
}

export default DicasPage;