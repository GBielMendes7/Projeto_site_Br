import './table.css';

import Header from './../../Componentes/Header/header.js';
import Footer from './../../Componentes/Footer/footer.js';
import ProgressBar from './../../Componentes/progress-bar/progress-bar.js';

import Background from './../../assets/imagens/Component 1.svg';
import escudoPalmeiras from './../../assets/imagens/Escudos Brasileirão.png';
import v from './../../assets/icons/vitoria.png';
import e from './../../assets/icons/vitoria-1.png';
import d from './../../assets/icons/vitoria-2.png';
import Reset from './../../assets/icons/Component 7.png';


function Table() {
    return (
        <div>
            <Header />
            <main>
                <div className="title">
                    <div className='title__progressBar'>
                        <h1>Historia</h1>
                        <ProgressBar className="teste" width={600} startDate="2024-01-01" endDate="2024-12-31" currentDate="2024-06-01" />
                        <span>14 Abr -</span>
                        <span> 14 Dez</span>
                    </div>
                    <div className="title__background-svg">
                        <img src={Background} alt="Logo" className="centered-comp" />
                    </div>
                </div>

                <section className='section-table'>
                    <nav className="filter-bar">
                        <div className='filter__league'>
                            <span>Liga</span>
                            <select className='filter__league__select'>
                                <option>Serie A</option>
                            </select>
                        </div>
                        <div className='filter__league'>
                            <span>Liga</span>
                            <select className='filter__league__select'>
                                <option>Serie A</option>
                            </select>
                        </div>
                        <div className='filter__league'>
                            <span>Liga</span>
                            <select className='filter__league__select'>
                                <option>Serie A</option>
                            </select>
                        </div>
                        <div className='filter__league'>
                            <span>Liga</span>
                            <select className='filter__league__select'>
                                <option>Serie A</option>
                            </select>
                        </div>
                        <div className='filter__reset'>
                            <img src={Reset} alt="Logo"/>
                            <button>Redefinir</button>
                        </div>
                    </nav>

                    <section className='game'>
                        <div className='table'>
                            <table>
                                <tr className='table__title'>
                                    <th className='fisth'>Posição</th>
                                    <th>PTS</th>
                                    <th>J</th>
                                    <th>V</th>
                                    <th>E</th>
                                    <th>D</th>
                                    <th>GP</th>
                                    <th>GC</th>
                                    <th>SG</th>
                                    <th>CA</th>
                                    <th>CV</th>
                                    <th>%</th>
                                    <th>Recentes</th>
                                    <th>Próx</th>
                                </tr>
                                <tr className='table__dados'>
                                    <td className='td-img'>1º <span><img src={escudoPalmeiras}alt="escudo"/></span> Botafogo - RJ</td>
                                    <td>51</td>
                                    <td>33</td>
                                    <td>15</td>
                                    <td>6</td>
                                    <td>12</td>
                                    <td>50</td>
                                    <td>38</td>
                                    <td>+12</td>
                                    <td>50</td>
                                    <td>3</td>
                                    <td>80</td>
                                    <td className='td-v'><img src={v}alt="escudo"/><img src={e}alt="escudo"/><img src={d}alt="escudo"/></td>
                                    <td className='td-next'><img src={escudoPalmeiras}alt="escudo"/></td>
                                </tr>
                                <tr className='table__dados'>
                                    <td className='td-img'>1º <span><img src={escudoPalmeiras}alt="escudo"/></span> Botafogo - RJ</td>
                                    <td>51</td>
                                    <td>33</td>
                                    <td>15</td>
                                    <td>6</td>
                                    <td>12</td>
                                    <td>50</td>
                                    <td>38</td>
                                    <td>+12</td>
                                    <td>50</td>
                                    <td>3</td>
                                    <td>80</td>
                                    <td className='td-v'><img src={v}alt="escudo"/><img src={e}alt="escudo"/><img src={d}alt="escudo"/></td>
                                    <td className='td-next'><img src={escudoPalmeiras}alt="escudo"/></td>
                                </tr>
                                <tr className='table__dados'>
                                    <td className='td-img'>1º <span><img src={escudoPalmeiras}alt="escudo"/></span> Botafogo - RJ</td>
                                    <td>51</td>
                                    <td>33</td>
                                    <td>15</td>
                                    <td>6</td>
                                    <td>12</td>
                                    <td>50</td>
                                    <td>38</td>
                                    <td>+12</td>
                                    <td>50</td>
                                    <td>3</td>
                                    <td>80</td>
                                    <td className='td-v'><img src={v}alt="escudo"/><img src={e}alt="escudo"/><img src={d}alt="escudo"/></td>
                                    <td className='td-next'><img src={escudoPalmeiras}alt="escudo"/></td>
                                </tr>
                                <tr className='table__dados'>
                                    <td className='td-img'>1º <span><img src={escudoPalmeiras}alt="escudo"/></span> Botafogo - RJ</td>
                                    <td>51</td>
                                    <td>33</td>
                                    <td>15</td>
                                    <td>6</td>
                                    <td>12</td>
                                    <td>50</td>
                                    <td>38</td>
                                    <td>+12</td>
                                    <td>50</td>
                                    <td>3</td>
                                    <td>80</td>
                                    <td className='td-v'><img src={v}alt="escudo"/><img src={e}alt="escudo"/><img src={d}alt="escudo"/></td>
                                    <td className='td-next'><img src={escudoPalmeiras}alt="escudo"/></td>
                                </tr>
                                <tr className='table__dados'>
                                    <td className='td-img'>1º <span><img src={escudoPalmeiras}alt="escudo"/></span> Botafogo - RJ</td>
                                    <td>51</td>
                                    <td>33</td>
                                    <td>15</td>
                                    <td>6</td>
                                    <td>12</td>
                                    <td>50</td>
                                    <td>38</td>
                                    <td>+12</td>
                                    <td>50</td>
                                    <td>3</td>
                                    <td>80</td>
                                    <td className='td-v'><img src={v}alt="escudo"/><img src={e}alt="escudo"/><img src={d}alt="escudo"/></td>
                                    <td className='td-next'><img src={escudoPalmeiras}alt="escudo"/></td>
                                </tr>
                                <tr className='table__dados'>
                                    <td className='td-img'>1º <span><img src={escudoPalmeiras}alt="escudo"/></span> Botafogo - RJ</td>
                                    <td>51</td>
                                    <td>33</td>
                                    <td>15</td>
                                    <td>6</td>
                                    <td>12</td>
                                    <td>50</td>
                                    <td>38</td>
                                    <td>+12</td>
                                    <td>50</td>
                                    <td>3</td>
                                    <td>80</td>
                                    <td className='td-v'><img src={v}alt="escudo"/><img src={e}alt="escudo"/><img src={d}alt="escudo"/></td>
                                    <td className='td-next'><img src={escudoPalmeiras}alt="escudo"/></td>
                                </tr>
                                <tr className='table__dados'>
                                    <td className='td-img'>1º <span><img src={escudoPalmeiras}alt="escudo"/></span> Botafogo - RJ</td>
                                    <td>51</td>
                                    <td>33</td>
                                    <td>15</td>
                                    <td>6</td>
                                    <td>12</td>
                                    <td>50</td>
                                    <td>38</td>
                                    <td>+12</td>
                                    <td>50</td>
                                    <td>3</td>
                                    <td>80</td>
                                    <td className='td-v'><img src={v}alt="escudo"/><img src={e}alt="escudo"/><img src={d}alt="escudo"/></td>
                                    <td className='td-next'><img src={escudoPalmeiras}alt="escudo"/></td>
                                </tr>
                                <tr className='table__dados'>
                                    <td className='td-img'>1º <span><img src={escudoPalmeiras}alt="escudo"/></span> Botafogo - RJ</td>
                                    <td>51</td>
                                    <td>33</td>
                                    <td>15</td>
                                    <td>6</td>
                                    <td>12</td>
                                    <td>50</td>
                                    <td>38</td>
                                    <td>+12</td>
                                    <td>50</td>
                                    <td>3</td>
                                    <td>80</td>
                                    <td className='td-v'><img src={v}alt="escudo"/><img src={e}alt="escudo"/><img src={d}alt="escudo"/></td>
                                    <td className='td-next'><img src={escudoPalmeiras}alt="escudo"/></td>
                                </tr>
                                <tr className='table__dados'>
                                    <td className='td-img'>1º <span><img src={escudoPalmeiras}alt="escudo"/></span> Botafogo - RJ</td>
                                    <td>51</td>
                                    <td>33</td>
                                    <td>15</td>
                                    <td>6</td>
                                    <td>12</td>
                                    <td>50</td>
                                    <td>38</td>
                                    <td>+12</td>
                                    <td>50</td>
                                    <td>3</td>
                                    <td>80</td>
                                    <td className='td-v'><img src={v}alt="escudo"/><img src={e}alt="escudo"/><img src={d}alt="escudo"/></td>
                                    <td className='td-next'><img src={escudoPalmeiras}alt="escudo"/></td>
                                </tr>
                                <tr className='table__dados'>
                                    <td className='td-img'>1º <span><img src={escudoPalmeiras}alt="escudo"/></span> Botafogo - RJ</td>
                                    <td>51</td>
                                    <td>33</td>
                                    <td>15</td>
                                    <td>6</td>
                                    <td>12</td>
                                    <td>50</td>
                                    <td>38</td>
                                    <td>+12</td>
                                    <td>50</td>
                                    <td>3</td>
                                    <td>80</td>
                                    <td className='td-v'><img src={v}alt="escudo"/><img src={e}alt="escudo"/><img src={d}alt="escudo"/></td>
                                    <td className='td-next'><img src={escudoPalmeiras}alt="escudo"/></td>
                                </tr>
                                <tr className='table__dados'>
                                    <td className='td-img'>1º <span><img src={escudoPalmeiras}alt="escudo"/></span> Botafogo - RJ</td>
                                    <td>51</td>
                                    <td>33</td>
                                    <td>15</td>
                                    <td>6</td>
                                    <td>12</td>
                                    <td>50</td>
                                    <td>38</td>
                                    <td>+12</td>
                                    <td>50</td>
                                    <td>3</td>
                                    <td>80</td>
                                    <td className='td-v'><img src={v}alt="escudo"/><img src={e}alt="escudo"/><img src={d}alt="escudo"/></td>
                                    <td className='td-next'><img src={escudoPalmeiras}alt="escudo"/></td>
                                </tr>
                                <tr className='table__dados'>
                                    <td className='td-img'>1º <span><img src={escudoPalmeiras}alt="escudo"/></span> Botafogo - RJ</td>
                                    <td>51</td>
                                    <td>33</td>
                                    <td>15</td>
                                    <td>6</td>
                                    <td>12</td>
                                    <td>50</td>
                                    <td>38</td>
                                    <td>+12</td>
                                    <td>50</td>
                                    <td>3</td>
                                    <td>80</td>
                                    <td className='td-v'><img src={v}alt="escudo"/><img src={e}alt="escudo"/><img src={d}alt="escudo"/></td>
                                    <td className='td-next'><img src={escudoPalmeiras}alt="escudo"/></td>
                                </tr>
                                <tr className='table__dados'>
                                    <td className='td-img'>1º <span><img src={escudoPalmeiras}alt="escudo"/></span> Botafogo - RJ</td>
                                    <td>51</td>
                                    <td>33</td>
                                    <td>15</td>
                                    <td>6</td>
                                    <td>12</td>
                                    <td>50</td>
                                    <td>38</td>
                                    <td>+12</td>
                                    <td>50</td>
                                    <td>3</td>
                                    <td>80</td>
                                    <td className='td-v'><img src={v}alt="escudo"/><img src={e}alt="escudo"/><img src={d}alt="escudo"/></td>
                                    <td className='td-next'><img src={escudoPalmeiras}alt="escudo"/></td>
                                </tr>
                                <tr className='table__dados'>
                                    <td className='td-img'>1º <span><img src={escudoPalmeiras}alt="escudo"/></span> Botafogo - RJ</td>
                                    <td>51</td>
                                    <td>33</td>
                                    <td>15</td>
                                    <td>6</td>
                                    <td>12</td>
                                    <td>50</td>
                                    <td>38</td>
                                    <td>+12</td>
                                    <td>50</td>
                                    <td>3</td>
                                    <td>80</td>
                                    <td className='td-v'><img src={v}alt="escudo"/><img src={e}alt="escudo"/><img src={d}alt="escudo"/></td>
                                    <td className='td-next'><img src={escudoPalmeiras}alt="escudo"/></td>
                                </tr>
                                <tr className='table__dados'>
                                    <td className='td-img'>1º <span><img src={escudoPalmeiras}alt="escudo"/></span> Botafogo - RJ</td>
                                    <td>51</td>
                                    <td>33</td>
                                    <td>15</td>
                                    <td>6</td>
                                    <td>12</td>
                                    <td>50</td>
                                    <td>38</td>
                                    <td>+12</td>
                                    <td>50</td>
                                    <td>3</td>
                                    <td>80</td>
                                    <td className='td-v'><img src={v}alt="escudo"/><img src={e}alt="escudo"/><img src={d}alt="escudo"/></td>
                                    <td className='td-next'><img src={escudoPalmeiras}alt="escudo"/></td>
                                </tr>
                                <tr className='table__dados'>
                                    <td className='td-img'>1º <span><img src={escudoPalmeiras}alt="escudo"/></span> Botafogo - RJ</td>
                                    <td>51</td>
                                    <td>33</td>
                                    <td>15</td>
                                    <td>6</td>
                                    <td>12</td>
                                    <td>50</td>
                                    <td>38</td>
                                    <td>+12</td>
                                    <td>50</td>
                                    <td>3</td>
                                    <td>80</td>
                                    <td className='td-v'><img src={v}alt="escudo"/><img src={e}alt="escudo"/><img src={d}alt="escudo"/></td>
                                    <td className='td-next'><img src={escudoPalmeiras}alt="escudo"/></td>
                                </tr>
                                <tr className='table__dados'>
                                    <td className='td-img'>1º <span><img src={escudoPalmeiras}alt="escudo"/></span> Botafogo - RJ</td>
                                    <td>51</td>
                                    <td>33</td>
                                    <td>15</td>
                                    <td>6</td>
                                    <td>12</td>
                                    <td>50</td>
                                    <td>38</td>
                                    <td>+12</td>
                                    <td>50</td>
                                    <td>3</td>
                                    <td>80</td>
                                    <td className='td-v'><img src={v}alt="escudo"/><img src={e}alt="escudo"/><img src={d}alt="escudo"/></td>
                                    <td className='td-next'><img src={escudoPalmeiras}alt="escudo"/></td>
                                </tr>
                                <tr className='table__dados'>
                                    <td className='td-img'>1º <span><img src={escudoPalmeiras}alt="escudo"/></span> Botafogo - RJ</td>
                                    <td>51</td>
                                    <td>33</td>
                                    <td>15</td>
                                    <td>6</td>
                                    <td>12</td>
                                    <td>50</td>
                                    <td>38</td>
                                    <td>+12</td>
                                    <td>50</td>
                                    <td>3</td>
                                    <td>80</td>
                                    <td className='td-v'><img src={v}alt="escudo"/><img src={e}alt="escudo"/><img src={d}alt="escudo"/></td>
                                    <td className='td-next'><img src={escudoPalmeiras}alt="escudo"/></td>
                                </tr>
                                <tr className='table__dados'>
                                    <td className='td-img'>1º <span><img src={escudoPalmeiras}alt="escudo"/></span> Botafogo - RJ</td>
                                    <td>51</td>
                                    <td>33</td>
                                    <td>15</td>
                                    <td>6</td>
                                    <td>12</td>
                                    <td>50</td>
                                    <td>38</td>
                                    <td>+12</td>
                                    <td>50</td>
                                    <td>3</td>
                                    <td>80</td>
                                    <td className='td-v'><img src={v}alt="escudo"/><img src={e}alt="escudo"/><img src={d}alt="escudo"/></td>
                                    <td className='td-next'><img src={escudoPalmeiras}alt="escudo"/></td>
                                </tr>
                                <tr className='table__dados'>
                                    <td className='td-img'>1º <span><img src={escudoPalmeiras}alt="escudo"/></span> Botafogo - RJ</td>
                                    <td>51</td>
                                    <td>33</td>
                                    <td>15</td>
                                    <td>6</td>
                                    <td>12</td>
                                    <td>50</td>
                                    <td>38</td>
                                    <td>+12</td>
                                    <td>50</td>
                                    <td>3</td>
                                    <td>80</td>
                                    <td className='td-v'><img src={v}alt="escudo"/><img src={e}alt="escudo"/><img src={d}alt="escudo"/></td>
                                    <td className='td-next'><img src={escudoPalmeiras}alt="escudo"/></td>
                                </tr>
                            </table>
                        </div>
                        <div className='games'>
                            <div className='games__title'>
                                <h2>Rodada 21</h2>
                            </div>
                            <div className='games__container'>
                                <span>SAB 26/08/2023 MARACANA 18:30</span>
                                <div className='games__score'>
                                    <span>FLA</span>
                                    <img src={escudoPalmeiras}alt="escudo"/>
                                    <span>0</span>
                                    <span>x</span>
                                    <span>0</span>
                                    <img src={escudoPalmeiras}alt="escudo"/>
                                    <span>FLA</span>
                                </div>
                            </div>
                            <div className='games__container'>
                                <span>SAB 26/08/2023 MARACANA 18:30</span>
                                <div className='games__score'>
                                    <span>FLA</span>
                                    <img src={escudoPalmeiras}alt="escudo"/>
                                    <span>0</span>
                                    <span>x</span>
                                    <span>0</span>
                                    <img src={escudoPalmeiras}alt="escudo"/>
                                    <span>FLA</span>
                                </div>
                            </div>
                            <div className='games__container'>
                                <span>SAB 26/08/2023 MARACANA 18:30</span>
                                <div className='games__score'>
                                    <span>FLA</span>
                                    <img src={escudoPalmeiras}alt="escudo"/>
                                    <span>0</span>
                                    <span>x</span>
                                    <span>0</span>
                                    <img src={escudoPalmeiras}alt="escudo"/>
                                    <span>FLA</span>
                                </div>
                            </div>
                            <div className='games__container'>
                                <span>SAB 26/08/2023 MARACANA 18:30</span>
                                <div className='games__score'>
                                    <span>FLA</span>
                                    <img src={escudoPalmeiras}alt="escudo"/>
                                    <span>0</span>
                                    <span>x</span>
                                    <span>0</span>
                                    <img src={escudoPalmeiras}alt="escudo"/>
                                    <span>FLA</span>
                                </div>
                            </div>
                            <div className='games__container'>
                                <span>SAB 26/08/2023 MARACANA 18:30</span>
                                <div className='games__score'>
                                    <span>FLA</span>
                                    <img src={escudoPalmeiras}alt="escudo"/>
                                    <span>0</span>
                                    <span>x</span>
                                    <span>0</span>
                                    <img src={escudoPalmeiras}alt="escudo"/>
                                    <span>FLA</span>
                                </div>
                            </div>
                            <div className='games__container'>
                                <span>SAB 26/08/2023 MARACANA 18:30</span>
                                <div className='games__score'>
                                    <span>FLA</span>
                                    <img src={escudoPalmeiras}alt="escudo"/>
                                    <span>0</span>
                                    <span>x</span>
                                    <span>0</span>
                                    <img src={escudoPalmeiras}alt="escudo"/>
                                    <span>FLA</span>
                                </div>
                            </div>
                            <div className='games__container'>
                                <span>SAB 26/08/2023 MARACANA 18:30</span>
                                <div className='games__score'>
                                    <span>FLA</span>
                                    <img src={escudoPalmeiras}alt="escudo"/>
                                    <span>0</span>
                                    <span>x</span>
                                    <span>0</span>
                                    <img src={escudoPalmeiras}alt="escudo"/>
                                    <span>FLA</span>
                                </div>
                            </div>
                            <div className='games__container'>
                                <span>SAB 26/08/2023 MARACANA 18:30</span>
                                <div className='games__score'>
                                    <span>FLA</span>
                                    <img src={escudoPalmeiras}alt="escudo"/>
                                    <span>0</span>
                                    <span>x</span>
                                    <span>0</span>
                                    <img src={escudoPalmeiras}alt="escudo"/>
                                    <span>FLA</span>
                                </div>
                            </div>
                            <div className='games__container'>
                                <span>SAB 26/08/2023 MARACANA 18:30</span>
                                <div className='games__score'>
                                    <span>FLA</span>
                                    <img src={escudoPalmeiras}alt="escudo"/>
                                    <span>0</span>
                                    <span>x</span>
                                    <span>0</span>
                                    <img src={escudoPalmeiras}alt="escudo"/>
                                    <span>FLA</span>
                                </div>
                            </div>
                            <div className='games__container'>
                                <span>SAB 26/08/2023 MARACANA 18:30</span>
                                <div className='games__score'>
                                    <span>FLA</span>
                                    <img src={escudoPalmeiras}alt="escudo"/>
                                    <span>0</span>
                                    <span>x</span>
                                    <span>0</span>
                                    <img src={escudoPalmeiras}alt="escudo"/>
                                    <span>FLA</span>
                                </div>
                            </div>

                        </div>
                    </section>

                </section>

            </main>
            <Footer />

        </div>
    );
}

export default Table;
