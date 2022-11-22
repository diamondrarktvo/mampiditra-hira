import React from "react";
import {HashLink} from 'react-router-hash-link';
import BackgroundSlideshow from 'react-background-slideshow';
import './download.css';

import alb_1 from '../../assets/images/album/dadju_album.png';
import alb_2 from '../../assets/images/album/gims_album.webp';
import alb_3 from '../../assets/images/album/illustr_music.jpg';
import alb_4 from '../../assets/images/album/illustr_music_2.jpg';
import alb_5 from '../../assets/images/album/illustr_music_3.jpg';

function Download (){
    return (
        <div className="container_download">
            <div className="landing_download">
                <BackgroundSlideshow images={[ alb_1, alb_2, alb_4, alb_3, alb_5 ]} />
                <HashLink to="/#search">
                    <button>Start download</button>
                </HashLink>
            </div>
        </div>
    )
}

export default Download;