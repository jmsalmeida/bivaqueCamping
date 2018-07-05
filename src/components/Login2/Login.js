import React, { Component } from 'react';
import './Login.css';
import Face from './img/face.png';
import Google from './img/google.png';

class Login extends Component {
    render() {
        return (
            <section id="mae">
                <div className="acesso">
                    <div className="espacamento">
                        <div id="login" className="caixas" >
                            <p className="logar" >Já tem uma conta? Faça seu login.</p>
                            <div className="wface"><a href=""><img src={Face} /><p>Entrar com Facebook</p></a></div>
                            <div className="wgoogle"><a href=""><img src={Google} /><p>Entrar com Google</p></a></div>
                            <div className="facerespon"><a href=""><img src={Face} /></a></div>
                            <div className="googlerespon"><a href=""><img src={Google} /></a></div>
                            <p className="ou">Ou</p>
                            <form className="inputflex">
                                <input className="inputs" type="text" placeholder="Email"></input>
                                <input className="inputs" type="password" placeholder="Senha"></input>
                                <input id="enviobtn" className="inputs" type="submit" value="Entrar" ></input>
                            </form>
                        </div>
                    </div>

                    <div className="espacamento" className="align">
                        <div id="registro" className="caixas">
                            <p className="logar" >Inscreva-se com suas redes sociais.</p>
                            <div className="wface"><a href=""><img src={Face} /><p>Entrar com Facebook</p></a></div>
                            <div className="wgoogle"><a href=""><img src={Google} /><p>Entrar com Google</p></a></div>
                            <div className="facerespon"><a href=""><img src={Face} /></a></div>
                            <div className="googlerespon"><a href=""><img src={Google} /></a></div>

                            <p className="ou">Inscreva-se com seu e-mail</p>
                            <form className="inputflex">
                                <input className="inputs" type="text" placeholder="Email"></input>
                                <input className="inputs" type="text" placeholder="Nome"></input>
                                <input className="inputs" type="text" placeholder="Sobrenome"></input>
                                <div className="agedate">
                                    <input className="inputs" type="text" placeholder="D"></input>
                                    <input className="inputs" type="text" placeholder="M"></input>
                                    <input className="inputs" type="text" placeholder="A"></input>
                                </div>
                                <p className="aviso">Os outros usuários não veram sua data de nascimento</p>
                                <input className="inputs" type="password" placeholder="Senha"></input>
                                <p className="aviso">Use no mínimo 6 caracteres</p>
                                <input id="enviobtn" className="inputs" type="submit" value="Cadastrar" ></input>
                            </form>
                        </div>
                        <p className="camping">Tem um camping e gostaria de se registrar ? <a href="">Registrar-se</a></p>
                    </div>
                </div>

                <p className="termos">Ao clicar em "Entrar/Cadastrar", você concorda com os <a href="">Termos e condições</a> Bivaque e com a <a href="">Política de privacidade</a>.</p>
            </section>
        );
    }
}

export default Login;