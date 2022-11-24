import React, { Fragment } from 'react';
import { HashLink } from 'react-router-hash-link';
import BackgroundSlideshow from 'react-background-slideshow';
import { useSelector } from 'react-redux';
import './download.css';
import { Result } from '../../components';
import { mockData } from '../../utils';

import logo_gif from '../../assets/images/logo.gif';
import alb_1 from '../../assets/images/album/illustr_music_1.jpg';
import alb_2 from '../../assets/images/album/illustr_music_4.jpg';
import alb_3 from '../../assets/images/album/illustr_music.jpg';
import alb_4 from '../../assets/images/album/illustr_music_2.jpg';
import alb_5 from '../../assets/images/album/illustr_music_3.jpg';
import { Link } from 'react-router-dom';

function Download() {
   const streaming = useSelector((selector) => selector.resultat.streaming);
   const downloading = useSelector((selector) => selector.resultat.downloading);
   return (
      <div className="container_download">
         <div className="landing_download">
            <BackgroundSlideshow images={[alb_1, alb_2, alb_4, alb_3, alb_5]} />
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
                  <input
                     type="text"
                     id="bar_de_recherche"
                     placeholder="Entrer votre clé ici..."
                  />
                  <div className="icon_search">
                     <i className="fa fa-search"></i>
                  </div>
               </div>
               <div className="instruction_search">
                  <p>
                     En appuyant sur "Rechercher", vous confirmez votre
                     consentement à nos{' '}
                     <Link to="/term-of-use" className="term_of_use">
                        Conditions d'utilisation.
                     </Link>
                  </p>
               </div>
            </div>
            <div className="div_result">
               <div className="information_result">
                  <p>
                     Vous trouverez ici tous les résultats de recherche pour
                     votre requête de recherche "test". Nous avons trouvé 25
                     résultats correspondants. Vous avez maintenant la
                     possibilité d'écouter chaque résultat avant de le
                     télécharger. Si vous le souhaitez, cliquez sur le bouton
                     "Play".
                  </p>
               </div>
               <div className="all_result_from_search">
                  {mockData.map((one_result) => (
                     <Fragment key={one_result.id}>
                        {streaming.playing &&
                           streaming.idVideoToPlay === one_result.id && (
                              <div className="container_video_playing">
                                 <p>Teste pour visualiser la vidéo</p>
                              </div>
                           )}
                        <Result
                           titre={one_result.titre}
                           source={one_result.source}
                           urlVideo={one_result.urlVideo}
                           id={one_result.id}
                        />
                        {downloading.download &&
                           downloading.idVideoToDownload === one_result.id && (
                              <div className="container_button_download">
                                 <h3 style={{ fontSize: '14px' }}>
                                    {one_result.titre}
                                 </h3>
                                 <p>
                                    <i className="fa fa-music"></i> Le fichier
                                    est prêt. Veuillez cliquer sur le bouton de
                                    téléchargement pour lancer le
                                    téléchargement.
                                 </p>
                                 <div className="bouton_to_download">
                                    <button
                                       style={{ backgroundColor: '#a8cf45' }}
                                    >
                                       Download MP3
                                    </button>
                                    <button
                                       style={{ backgroundColor: '#0098da' }}
                                    >
                                       Download MP4
                                    </button>
                                 </div>
                              </div>
                           )}
                     </Fragment>
                  ))}
               </div>
            </div>
            <div className="latest_music">
               <div>
                  <p>
                     <i className="fa fa-bomb"></i> Vous pouvez retrouvez ici
                     les derniers nouveautés. <i className="fa fa-bomb"></i>
                  </p>
               </div>
               <Link to="/latest-music">
                  <button>
                     <i className="fa fa-music"></i> latest music
                  </button>
               </Link>
            </div>
         </div>
      </div>
   );
}

export default Download;
