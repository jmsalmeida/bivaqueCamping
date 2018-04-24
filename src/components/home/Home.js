import React, {Component} from 'react';
import '../../css/Auxiliares.css';
import './Home.css';

class Home extends Component{
    render(){
        return (
            <section id="home-bg">
                <div className="container">
                    <div className="caixa-pesquisa">
                        <h2>Encontre o camping ideal para sua viagem</h2> 
                        <form>
                            <input type="text" id="search" name="search"/>
                            <div>
                                <input type="radio" id="campista" name="campista" value="campista"/>Campista
                                <input type="radio" id="nao-campista" name="nao-campista"/>Não Campista
                            </div>
                        </form>
                        <button className="btn-buscar">BUSCAR</button>
                    </div>
                    <a>Desejo cadastrar o meu camping!</a>
                </div>
            </section>
        );
    }
}

export default Home;