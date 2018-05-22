import React, { Component } from 'react';
import './css/LoginPage.css';
// import MenuBuscar from '../components/MenuBuscar/MenuBuscar';
import Login from '../components/Login/Login';

class LoginPage extends Component {
    render(){
        return(
            <div className="login-page">
                {/* <MenuBuscar /> */}
                <section>
                    <Login />
                </section>
            </div>
        );
    }
}

export default LoginPage;