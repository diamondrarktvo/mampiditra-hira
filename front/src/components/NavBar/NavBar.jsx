import React from "react";
import './NavBar.css';
import logo from '../../assets/images/logo.png';
import {Link} from 'react-router-dom';

const NavBar = () => {
    return(
        <div className="container">
            <Link to="/">
                <img src={logo} alt="Logo de notre site" />
            </Link>
            <div className="menu">
                <div className="main_menu">
                    <ul>
                        <Link to="/" className="item_nav">
                            <li>Accueil</li>
                        </Link>
                        <Link to="/telechargement" className="item_nav">
                            <li>Télecharger</li>
                        </Link>
                        <Link to="/faq" className="item_nav">
                            <li>FAQ</li>
                        </Link>
                    </ul>
                </div>
                <div className="other_menu">
                    <select>
                        <option value="francais">Français</option>
                        <option value="malagasy">Malagasy</option>
                        <option value="english">English</option>
                    </select>
                </div>
            </div>
        </div>
    )
}

export default NavBar;