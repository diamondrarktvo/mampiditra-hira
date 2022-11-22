import React from "react";
import {HashLink} from 'react-router-hash-link';
import BackgroundSlideshow from 'react-background-slideshow';
import './download.css';

import logo_gif from "../../assets/images/logo.gif"
import alb_1 from '../../assets/images/album/dadju_album.png';
import alb_2 from '../../assets/images/album/gims_album.webp';
import alb_3 from '../../assets/images/album/illustr_music.jpg';
import alb_4 from '../../assets/images/album/illustr_music_2.jpg';
import alb_5 from '../../assets/images/album/illustr_music_3.jpg';
import { Link } from 'react-router-dom';

function Download (){
    return (
        <div className="container_download">
            <div className="landing_download">
                <BackgroundSlideshow images={[ alb_1, alb_2, alb_4, alb_3, alb_5 ]} />
                <HashLink to="#search">
                    <button>Start download</button>
                </HashLink>
            </div>
            <div className="section_download" id="search">
                <div className="logo_in_download">
                    <img src={logo_gif} alt="Logo gif mp3" />
                </div>
                <div className="div_bar_search">
                   <div className="bar_search">
                        <input type="text" id="bar_de_recherche" placeholder="Entrer votre clé ici..." /><div className="icon_search"><i className="fa fa-search"></i></div> 
                   </div>
                   <div className="instruction_search">
                        <p>En appuyant sur "Rechercher", vous confirmez votre consentement à nos <Link to="/term-of-use" className="term_of_use">Conditions d'utilisation.</Link></p>
                   </div>
                </div>
            </div>
        </div>
    )
}

export default Download;