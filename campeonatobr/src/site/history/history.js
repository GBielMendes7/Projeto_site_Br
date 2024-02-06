import "./history.css"
import Header from './../../Componentes/Header/header.js';
import Footer from './../../Componentes/Footer/footer.js';

import Background from './../../assets/imagens/Component 1.svg';

import AtleticoMG from './../../assets/imagens/Rectangle 54.png';
import taca1 from './../../assets/imagens/f4z5hr7wsaapeiz-2-1-scaled.webp';
import imagemTacabrasil from './../../assets/imagens/84202389_rio_de_janeiro_rj_29-03-1960_-_futebol_-_brasil_-_taca_brasil_-_1959_-_esporte_clube_ba_1.jpg';
import Afonsinho from './../../assets/imagens/Afonsinho.jpg';
import taca2 from './../../assets/imagens/Troféus da Taça Brasil de 1959 a 1968 campeonato brasileiro.JPG';
import timePalmeiras from './../../assets/imagens/Time_do_Palmeiras_campeão_brasileiro_de_1967_(Torneio_Roberto_Gomes_Pedrosa).jpg';
import peleSantos from './../../assets/imagens/pelx_santos_1.webp';
import taca3 from './../../assets/imagens/Troféus da Taça Roberto Gomes Pedrosa de 1967 1968 1969 1970.JPG';
import levantarTaca from './../../assets/imagens/6538908545_57ef7171f9.jpg';

import escudoAtmg from './../../assets/imagens/Serie A BR/g8.png';

function History() {
    return (
        <div>
            <Header />
            <main className="containerHistory">
                <div className="titleHistory">
                    <h1>Historia</h1>
                    <div className="background-svgHistory">
                        <img src={Background} alt="Logo" />
                    </div>
                </div>

                <section className="mainHistory">
                    <section className="torneio1">
                        <div className="container1">
                            <div className="container1__cor">
                                <h1>Torneio <br /> <span className="peso-titulo">dos <br /> Campeões</span></h1>
                            </div>
                            <p>Jorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. </p>
                        </div>
                        <div className="cont1">
                            <div className="cont1__imgem">
                                <img src={AtleticoMG} alt="Atletico-MG" />
                            </div>
                            <div className="titulos">
                                <div className="taca">
                                    <h3>Taça</h3>
                                    <img src={taca1} alt="taça" />
                                </div>
                                <div className="times">
                                    <h3>Campeões</h3>
                                    <div className="time">
                                        <img src={escudoAtmg} alt="taça" />
                                        <span>Atletico-MG 1937</span>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="torneio2History">
                        <div className="titulo">
                            <img src={imagemTacabrasil} alt="Campeões" />
                            <div className="ti1">
                                <h1>Taça <br /> <span className="peso-titulo">Brasil</span></h1>
                            </div>
                        </div>
                        <div className="info">
                            <div className="text">
                                <h2>Brasileirão</h2>
                                <p>Jorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. </p>
                            </div>
                            <img src={Afonsinho} alt="Afonsinho" />
                        </div>
                        <div className="titulos2">
                            <div className="taca">
                                <h3>Taça</h3>
                                <img src={taca2} alt="taça" />
                            </div>
                            <div className="times">
                                <h3>Campeões</h3>
                                <div className="time">
                                    <img src={escudoAtmg} alt="Atletico-MG" />
                                    <span>Atletico-MG 1937</span>
                                    <img src={escudoAtmg} alt="Atletico-MG" />
                                    <span>Atletico-MG 1937</span>
                                    <img src={escudoAtmg} alt="Atletico-MG" />
                                    <span>Atletico-MG 1937</span>
                                </div>
                                <div className="time">
                                    <img src={escudoAtmg} alt="Atletico-MG" />
                                    <span>Atletico-MG 1937</span>
                                    <img src={escudoAtmg} alt="Atletico-MG" />
                                    <span>Atletico-MG 1937</span>
                                    <img src={escudoAtmg} alt="Atletico-MG" />
                                    <span>Atletico-MG 1937</span>
                                </div>
                                <div className="time">
                                    <img src={escudoAtmg} alt="Atletico-MG" />
                                    <span>Atletico-MG 1937</span>
                                    <img src={escudoAtmg} alt="Atletico-MG" />
                                    <span>Atletico-MG 1937</span>
                                    <img src={escudoAtmg} alt="Atletico-MG" />
                                    <span>Atletico-MG 1937</span>
                                </div>
                                <div className="time">
                                    <img src={escudoAtmg} alt="Atletico-MG" />
                                    <span>Atletico-MG 1937</span>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="torneio3">
                        <div className="torneio3__info">
                            <img src={timePalmeiras} alt="Afonsinho" />
                            <div className="text">
                                <h2>Brasileirão</h2>
                                <p>Jorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. </p>
                            </div>
                        </div>
                        <div className="torneio3__titulo">
                            <div className="torneio3__titulo__ti1">
                                <h1>Taça <br /> <span className="peso-titulo">De Prata</span></h1>
                            </div>
                            <img src={peleSantos} alt="Campeões" />
                        </div>
                        <div className="torneio3__titulos">
                            <div className="taca">
                                <h3>Taça</h3>
                                <img src={taca3} alt="taça" />
                            </div>
                            <div className="times">
                                <h3>Campeões</h3>
                                <div className="time">
                                    <img src={escudoAtmg} alt="Atletico-MG" />
                                    <span>Atletico-MG 1937</span>
                                    <img src={escudoAtmg} alt="Atletico-MG" />
                                    <span>Atletico-MG 1937</span>
                                </div>
                                <div className="time">
                                    <img src={escudoAtmg} alt="Atletico-MG" />
                                    <span>Atletico-MG 1937</span>
                                    <img src={escudoAtmg} alt="Atletico-MG" />
                                    <span>Atletico-MG 1937</span>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="toneio4History">
                        <img src={levantarTaca} alt="Atletico-MG" className="levantarTaca"/>
                        <div className="toneio4History__text">
                            <div className="text__cor">
                                <h1>Campeonato <br /> <span className="peso-titulo">dos <br /> Nacional de Clubes</span></h1>
                            </div>
                            <p>Jorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. </p>
                            <div className="toneio4History__titulos">
                                <div className="taca">
                                    <h3>Taça</h3>
                                    <img src={taca3} alt="taça" />
                                </div>
                                <div className="times">
                                    <h3>Campeões</h3>
                                    <div className="time">
                                        <img src={escudoAtmg} alt="Atletico-MG" />
                                        <span>Atletico-MG 1937</span>
                                    </div>
                                    <div className="time">
                                        <img src={escudoAtmg} alt="Atletico-MG" />
                                        <span>Atletico-MG 1937</span>
                                    </div>
                                    <div className="time">
                                        <img src={escudoAtmg} alt="Atletico-MG" />
                                        <span>Atletico-MG 1937</span>
                                    </div>
                                    <div className="time">
                                        <img src={escudoAtmg} alt="Atletico-MG" />
                                        <span>Atletico-MG 1937</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </section>


                </section>

            </main>
            <Footer />
        </div>
    )
}

export default History;