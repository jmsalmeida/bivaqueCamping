import React, { Component } from 'react';
// CSS
import './Modal.css';

import Login from '../Login/Login';

class Modal extends Component {

    render() {
        let modalCSS = 'modal-style';

        if (this.props.ativo) {
            modalCSS += ' ativo';
        }

        return (
            <div>
                <div className="caixa">
                    <div className={modalCSS}>
                        <div className="fechar">
                            <a onClick={this.props.alternarModal}><i class="fas fa-times"></i></a>
                        </div>
                        <Login />
                    </div>
                </div>
            </div>
        );
    }
}

export default Modal;