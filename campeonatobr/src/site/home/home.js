import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import './home.css';
import Header from './../../Componentes/Header/header.js';
import Footer from './../../Componentes/Footer/footer.js';


import Logo from './../../assets/imagens/Logo.svg';
import Background from './../../assets/imagens/Component 1.svg';
import Seta from './../../assets/imagens/Component 7.svg';
import Padronagem from './../../assets/imagens/padronagem.svg';
import Linhas from './../../assets/imagens/Group 40.svg';
import backgroundsvg from './../../assets/imagens/Group 44.svg';
import imagePele from './../../assets/imagens/pelx_santos_1.webp';
import tituloCampeao from './../../assets/imagens/2022 Palmeiras campeao brasileiro.jpeg';

import escudoPalmeiras from './../../assets/imagens/Serie A BR/Palmeiras_logo.svg';
import escudoCruzeiro from './../../assets/imagens/Serie A BR/cruzeiro.svg';
import escudoFla from './../../assets/imagens/Serie A BR/Flamengo_braz_logo.svg';
import escudoAm from './../../assets/imagens/Serie A BR/America-MG-VERDE.svg';
import escudoApr from './../../assets/imagens/Serie A BR/Athletico-PR.svg';
import escudoCo from './../../assets/imagens/Serie A BR/Coritiba_FBC_(2011)_-_PR.svg';
import escudoCuiaba from './../../assets/imagens/Serie A BR/CuiabáEC2020.png';
import escudoBa from './../../assets/imagens/Serie A BR/ECBahia.png';
import escudoFor from './../../assets/imagens/Serie A BR/Fortaleza_2021_1.svg';
import escudoGoi from './../../assets/imagens/Serie A BR/GOIAS-2021.svg';
import escudoBota from './../../assets/imagens/Serie A BR/botafogo.svg';
import escudoBra from './../../assets/imagens/Serie A BR/bragantino.svg';
import escudoFlu from './../../assets/imagens/Serie A BR/fluminense.png';
import escudoGre from './../../assets/imagens/Serie A BR/gremio.svg';
import escudoVas from './../../assets/imagens/Serie A BR/vasco_SVG.svg';
import escudoInt from './../../assets/imagens/Serie A BR/internacional.png';
import escudoCor from './../../assets/imagens/Serie A BR/Corinthians.png';
import escudoSP from './../../assets/imagens/Serie A BR/Sao_Paulo_Futebol_Clube 2.png';
import escudoSan from './../../assets/imagens/Serie A BR/Santos_logo 1.png';
import escudoAtmg from './../../assets/imagens/Serie A BR/g8.png';



function Home() {
    useEffect(() => {
        const sr = ScrollReveal({ reset: true });
        sr.reveal(".escudos", { duration: 1000 });
        sr.reveal(".tilulo_pag", { duration: 3000 });
      }, []);

    return (
        <div>
            <Header />
            <main className="container">
                <section className="section" id="section1">
                    <div className="tilulo_pag">
                        <img src={Logo} alt="Logo" className="centered-logo" />
                        <h1>CAMPEONATO <br />BRASILEIRO</h1>
                    </div>
                    <div className="background-svg">
                        <img src={Background} alt="Logo" className="centered-comp" />
                    </div>
                </section>

                <div className="scroll-message">
                    <p>Role para baixo</p>
                    <img src={Seta} alt="seta" className="seta" />
                </div>

                <section className="section" id="section2">
                    <div className="texto-s2">
                        Jorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. className aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.
                    </div>
                    <div className="background-svg2">
                        <img src={Padronagem} alt="Logo" className="centered-comp2" />
                    </div>
                    <div className="linhas1">
                        <img src={Linhas} alt="Logo" className="linhas1" />
                    </div>
                </section>

                <section className="section" id="section3">
                    <div className="texto">
                        <h1>Clubes do Brasileirão</h1>
                        <p>Jorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. className aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.</p>
                    </div>
                    <div className="escudos">
                        <div className="grid-item"><img src={escudoPalmeiras} alt="escudo" className="centered-escudo" /></div>
                        <div className="grid-item"><img src={escudoFla} alt="escudo" className="centered-escudo" /></div>
                        <div className="grid-item"><img src={escudoCruzeiro} alt="escudo" className="centered-escudo" /></div>
                        <div className="grid-item"><img src={escudoAm} alt="escudo" className="centered-escudo" /></div>
                        <div className="grid-item"><img src={escudoApr} alt="escudo" className="centered-escudo" /></div>
                        <div className="grid-item"><img src={escudoCo} alt="escudo" className="centered-escudo" /></div>
                        <div className="grid-item"><img src={escudoCuiaba} alt="escudo" className="centered-escudo" /></div>
                        <div className="grid-item"><img src={escudoBa} alt="escudo" className="centered-escudo" /></div>
                        <div className="grid-item"><img src={escudoFor} alt="escudo" className="centered-escudo" /></div>
                        <div className="grid-item"><img src={escudoGoi} alt="escudo" className="centered-escudo" /></div>
                        <div className="grid-item" style={{height:70}}><img src={escudoBra} alt="escudo" className="centered-escudo" /></div>
                        <div className="grid-item"><img src={escudoFlu} alt="escudo" className="centered-escudo" /></div>
                        <div className="grid-item"><img src={escudoGre} alt="escudo" className="centered-escudo" /></div>
                        <div className="grid-item"><img src={escudoBota} alt="escudo" className="centered-escudo" /></div>
                        <div className="grid-item"><img src={escudoVas} alt="escudo" className="centered-escudo" /></div>
                        <div className="grid-item"><img src={escudoCor} alt="escudo" className="centered-escudo" /></div>
                        <div className="grid-item"><img src={escudoInt} alt="escudo" className="centered-escudo" /></div>
                        <div className="grid-item"><img src={escudoSP} alt="escudo" className="centered-escudo" /></div>
                        <div className="grid-item"><img src={escudoSan} alt="escudo" className="centered-escudo" /></div>
                        <div className="grid-item"><img src={escudoAtmg} alt="escudo" className="centered-escudo" /></div>
                    </div>
                    <div className="linhas2">
                        <img src={Linhas} alt="Logo" className="linhas1" />
                    </div>
                    <div className="background-svg3">
                        <img src={backgroundsvg} alt="Logo" className="centered-comp3" />
                    </div>
                </section>

                <section className="section" id="section4">
                    <div className="linhas1">
                        <img src={Linhas} alt="Logo" className="linhas1" />
                    </div>
                    <div className='torneio2'>
                        <div className="titulo">
                            <img src={imagePele} alt="pelé" />
                            <div className="ti1">
                                <h1>Rica <br /> <span class="peso-titulo">Historia</span></h1>
                                <div class="detalhe"></div>
                            </div>
                        </div>
                        <div className="info">
                            <div className="text">
                                <h2>Brasileirão</h2>
                                <p>Jorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. </p>
                            </div>
                            <img src={tituloCampeao} alt="Titulo" />
                        </div>
                    </div>
                    <div className="background-svg4">
                        <img src={Background} alt="Logo" className="centered-comp" />
                    </div>
                    
                </section>
            </main>
            <Footer />

        </div>
    );
}

export default Home;