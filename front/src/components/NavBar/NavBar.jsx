import React from "react";
import './NavBar.css';
import logo from '../../assets/images/logo.png';
import {Link} from 'react-router-dom';
import {HashLink} from 'react-router-hash-link';

const NavBar = () => {
    return(
        <div className="container_navbar">
            <Link to="/">
                <img src={logo} alt="Logo de notre site" />
            </Link>
            <div className="menu">
                <div className="main_menu">
                    <ul>
                        <Link to="/">
                            <li  className="item_nav">Accueil</li>
                        </Link>
                        <Link to="/telechargement">
                            <li className="item_nav" >Télecharger</li>
                        </Link>
                        <Link to="/faq">
                            <li className="item_nav">FAQ</li>
                        </Link>
                        <HashLink to="/#about">
                            <li className="item_nav">About</li>
                        </HashLink>
                    </ul>
                </div>
                <div className="other_menu">
                    <Link to="/contact">
                        <p className="item_nav">Contact</p>
                    </Link>
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