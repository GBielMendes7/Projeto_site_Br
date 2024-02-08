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
import taca4 from './../../assets/imagens/Troféus do Campeonato Brasileiro de 1971 1972 1973 1974.JPG';
import Internacional from './../../assets/imagens/internacional-campeao-brasileiro-1975.jpg';
import Goias from './../../assets/imagens/edson-taca_h4Iv0o9.webp';
import taca5 from './../../assets/imagens/Taça das Bolinhas de 1975 a 1992 campeonato brasileiro.png';
import zico from './../../assets/imagens/5ed3fd54c4f39.jpeg';
import SP from './../../assets/imagens/download.jpg';
import copaUniao from './../../assets/imagens/1_K3BuPQa1-oIJeqLChizYjg.jpg';
import taca7 from './../../assets/imagens/Sem título1.png';
import corTituli from './../../assets/imagens/maxresdefault.jpg';
import botaTituli from './../../assets/imagens/566ca1ba2254a.webp';
import taca82 from './../../assets/imagens/Sem título.png';
import vasTituli from './../../assets/imagens/688563_med_.jpg.jpg';
import taca9 from './../../assets/imagens/Troféu do Campeonato Brasileiro de 1993 a 2013 e Copa Joao Havelange 2000.png';
import athTituli from './../../assets/imagens/atleticopr_campeaobrasileiro2001_ae_95.jpg';
import sanxCor from './../../assets/imagens/img2116675812854.webp';
import cruTituli from './../../assets/imagens/cruzeiro-2001.jpg';
import palTituli from './../../assets/imagens/2022 Palmeiras campeao brasileiro.jpeg';
import taca11 from './../../assets/imagens/Brasileirão-2014.png';


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
                        <img src={levantarTaca} alt="Atletico-MG" className="levantarTaca" />
                        <div className="toneio4History__text">
                            <div className="text__cor">
                                <h1>Campeonato <br /> <span className="peso-titulo">dos <br /> Nacional de Clubes</span></h1>
                            </div>
                            <p>Jorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. </p>
                            <div className="toneio4History__titulos">
                                <div className="taca">
                                    <h3>Taça</h3>
                                    <img src={taca4} alt="taça" />
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
                    <search className="toneio5History">
                        <div className="toneio5History__text">
                            <div className="text__cor">
                                <h1>Copa <br /> <span className="peso-titulo"> Brasil</span></h1>
                            </div>
                            <p>Jorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. </p>
                            <div className="toneio5History__titulos">
                                <div className="taca">
                                    <h3>Taça</h3>
                                    <img src={taca5} alt="taça" />
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
                        <div className="toneio5History__imgs">
                            <img src={Internacional} alt="Logo" className="toneio5History__imgs__inter" />
                            <img src={Goias} alt="Logo" className="toneio5History__imgs__goias" />
                        </div>
                    </search>

                    <search className="toneio6History">
                        <div className="toneio6History__titulo">
                            <img src={zico} alt="Campeões" />
                            <div className="toneio6History__titulo__ti1">
                                <h1>Taça <br /> <span className="peso-titulo">De Ouro</span></h1>
                            </div>
                        </div>
                        <div className="toneio6History__info">
                            <img src={SP} alt="Afonsinho" />
                            <div className="toneio6History__text">
                                <p>Jorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. </p>
                            </div>
                        </div>
                        <div className="toneio6History__titulos">
                            <div className="taca">
                                <h3>Taça</h3>
                                <img src={taca5} alt="taça" />
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
                    </search>
                    <search className="toneio7History">
                        <div className="toneio7History__text">
                            <div className="text__cor">
                                <h1>Copa <br /> <span className="peso-titulo"> União</span></h1>
                            </div>
                            <p>Jorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. </p>
                            <div className="toneio7History__titulos">
                                <div className="taca">
                                    <h3>Taça</h3>
                                    <img src={taca5} alt="taça" />
                                    <img src={taca7} alt="taça" />
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
                                </div>
                            </div>
                        </div>
                        <div className="toneio7History__img">
                            <img src={copaUniao} alt="Logo" />
                        </div>
                    </search>
                    <search className="toneio8History">
                        <div className="toneio8History__info">
                            <img src={corTituli} alt="Afonsinho" />
                            <div className="text">
                                <h2>1989 a 1999</h2>
                                <p>Jorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. </p>
                            </div>
                        </div>
                        <div className="toneio8History__titulo">
                            <div className="toneio8History__titulo__ti1">
                                <h1>Campeonato <br /> <span className="peso-titulo">Brasileiro</span></h1>
                            </div>
                            <img src={botaTituli} alt="Campeões" />
                        </div>
                        <div className="toneio8History__titulos">
                            <div className="taca">
                                <h3>Taça</h3>
                                <img src={taca5} alt="taça" />
                                <img src={taca82} alt="taça" />
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
                                    <img src={escudoAtmg} alt="Atletico-MG" />
                                    <span>Atletico-MG 1937</span>
                                </div>
                            </div>
                        </div>
                    </search>
                    <search className="toneio9History">
                        <div className="toneio9History__info">
                            <div className="toneio9History__titulo__ti1">
                                <h1>Copa <br /> <span className="peso-titulo">João <br /> Havelange</span></h1>
                            </div>
                            <p>Jorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. </p>
                        </div>
                        <div className="toneio9History__titulos">
                            <div className="toneio9History__titulos__img">
                                <img src={vasTituli} alt="Atletico-MG" />
                            </div>
                            <div className="titulos">
                                <div className="taca">
                                    <h3>Taça</h3>
                                    <img src={taca9} alt="taça" />
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
                    </search>
                    <search className="toneio10History">
                        <div className="toneio10History__titulo">
                            <h1>Campeonato <br /> <span className="peso-titulo">Brasileiro</span></h1>
                        </div>
                        <div className="toneio10History__campeoes">
                            <img src={athTituli} alt="Atletico-MG" className="toneio10History__campeoes__img" />
                            <div className="titulos">
                                <div className="times">
                                    <h3>Campeões</h3>
                                    <div className="time">
                                        <img src={escudoAtmg} alt="taça" />
                                        <span>Atletico-MG 1937</span>
                                    </div>
                                    <div className="time">
                                        <img src={escudoAtmg} alt="taça" />
                                        <span>Atletico-MG 1937</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="toneio10History__info">
                            <div className="toneio10History__info__text">
                                <h2>Brasileirão</h2>
                                <p>Jorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. </p>
                            </div>
                            <img src={sanxCor} alt="Afonsinho" />
                        </div>
                    </search>
                    <search className="toneio11History">
                        <h2>Era pontos corridos</h2>
                        <div className="toneio11History__infos">
                            <div className="toneio11History__infos__text">
                                <p>Jorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. </p>
                                <div className="toneio11History__titulos">
                                    <div className="taca">
                                        <h3>Taça</h3>
                                        <img src={taca11} alt="taça" />
                                        <img src={taca82} alt="taça" />
                                    </div>
                                </div>    
                            </div>
                            <div className="toneio11History__infos__imgs">
                                <img src={cruTituli} alt="taça" className="cru"/>
                                <img src={palTituli} alt="taça" className="pal"/>
                            </div>
                        </div>
                        <div className="toneio11History__campeoes">
                            <div className="titulos">
                                <div className="times">
                                    <h3>Campeões</h3>
                                    <div className="time">
                                        <img src={escudoAtmg} alt="taça" />
                                        <span>Atletico-MG 1937</span>
                                        <img src={escudoAtmg} alt="taça" />
                                        <span>Atletico-MG 1937</span>
                                        <img src={escudoAtmg} alt="taça" />
                                        <span>Atletico-MG 1937</span>
                                    </div>
                                    <div className="time">
                                        <img src={escudoAtmg} alt="taça" />
                                        <span>Atletico-MG 1937</span>
                                        <img src={escudoAtmg} alt="taça" />
                                        <span>Atletico-MG 1937</span>
                                        <img src={escudoAtmg} alt="taça" />
                                        <span>Atletico-MG 1937</span>
                                    </div>
                                    <div className="time">
                                        <img src={escudoAtmg} alt="taça" />
                                        <span>Atletico-MG 1937</span>
                                        <img src={escudoAtmg} alt="taça" />
                                        <span>Atletico-MG 1937</span>
                                        <img src={escudoAtmg} alt="taça" />
                                        <span>Atletico-MG 1937</span>
                                    </div>
                                    <div className="time">
                                        <img src={escudoAtmg} alt="taça" />
                                        <span>Atletico-MG 1937</span>
                                        <img src={escudoAtmg} alt="taça" />
                                        <span>Atletico-MG 1937</span>
                                        <img src={escudoAtmg} alt="taça" />
                                        <span>Atletico-MG 1937</span>
                                    </div>
                                    <div className="time">
                                        <img src={escudoAtmg} alt="taça" />
                                        <span>Atletico-MG 1937</span>
                                        <img src={escudoAtmg} alt="taça" />
                                        <span>Atletico-MG 1937</span>
                                    </div>
                                    <div className="time">
                                        <img src={escudoAtmg} alt="taça" />
                                        <span>Atletico-MG 1937</span>
                                        <img src={escudoAtmg} alt="taça" />
                                        <span>Atletico-MG 1937</span>
                                    </div>
                                    <div className="time">
                                        <img src={escudoAtmg} alt="taça" />
                                        <span>Atletico-MG 1937</span>
                                        <img src={escudoAtmg} alt="taça" />
                                        <span>Atletico-MG 1937</span>
                                    </div>
                                    <div className="time">
                                        <img src={escudoAtmg} alt="taça" />
                                        <span>Atletico-MG 1937</span>
                                        <img src={escudoAtmg} alt="taça" />
                                        <span>Atletico-MG 1937</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <img src={Background} alt="Logo" className="background-svg-History" />
                    </search>


                </section>

            </main>
            <Footer />
        </div>
    )
}

export default History;