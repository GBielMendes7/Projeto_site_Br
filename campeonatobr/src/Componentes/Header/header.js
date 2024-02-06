import React, { useState } from 'react';
import './header.css';

import iconMenu from './../../assets/icons/menu_FILL0_wght400_GRAD0_opsz24.svg';

import { Link } from 'react-router-dom';

function header() {
    const [abrirMenu, setAbrirMenu] = useState(false);

    const handleBtnClick = () => {
        setAbrirMenu(true);
    };

    const handleOverlayClick = () => {
        setAbrirMenu(false);
    };

    return (
        <div>
            <nav className="menu">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/Tabela">Tabela</Link></li>
                    <li><a href="#">Estatísticas</a></li>
                    <li><a href="#">Noticias</a></li>
                    <li><Link to="/Historia">Historia</Link></li>
                    <li><a href="#">A CBF</a></li>
                </ul>
            </nav>

            <div className="btn-abrir-menu" id="btn-menu" onClick={handleBtnClick}>
                <span><img src={iconMenu}alt="escudo"/></span>
            </div>

            <div className={`menu-mobile ${abrirMenu ? 'abrir-menu' : ''}`} id="menu-mobile" onClick={handleOverlayClick}>
                <div className="btn-fechar">
                    <span className="material-symbols-outlined">close</span>
                </div>
                <nav>
                    <ul>
                        <li><a><Link to="/">Home</Link></a></li>
                        <li><a><Link to="/Tabela">Tabela</Link></a></li>
                        <li><a href="#">Estatísticas</a></li>
                        <li><a href="#">Noticias</a></li>
                        <li><Link to="/Historia">Historia</Link></li>
                        <li><a href="#">A CBF</a></li>
                    </ul>
                </nav>
            </div>
            <div className="overlay-menu" id="overlay-menu" onClick={handleOverlayClick}></div>
        </div>

    );
}

export default header;