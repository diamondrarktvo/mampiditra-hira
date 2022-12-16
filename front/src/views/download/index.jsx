import React, { Fragment, useState } from 'react';
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
import BackgroundSlideshow from 'react-background-slideshow';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import './download.css';
import { Result } from '../../components';
import { MusicService } from '../../services';
import { Loading } from '../../components';

import logo_gif from '../../assets/images/logo.gif';
import alb_1 from '../../assets/images/album/illustr_music_1.jpg';
import alb_2 from '../../assets/images/album/illustr_music_4.jpg';
import alb_3 from '../../assets/images/album/illustr_music.jpg';
import alb_4 from '../../assets/images/album/illustr_music_2.jpg';
import alb_5 from '../../assets/images/album/illustr_music_3.jpg';

function Download() {
   const { t } = useTranslation();
   const streaming = useSelector((selector) => selector.resultat.streaming);
   const downloading = useSelector((selector) => selector.resultat.downloading);
   const [motCleSearch, setMotCleSearch] = useState(null);
   const [allResultFromSearch, setAllResultFromSearch] = useState([]);
   const [isSearching, setIsSearching] = useState(false);
   const [isConvert, setIsConvert] = useState(false);
   const [linkToDownload, setLinkToDownload] = useState(null);

   const onHandleChangeInput = (e) => {
      let value_input_search = e.target.value;
      setMotCleSearch(value_input_search);
   };

   const searching = async () => {
      if (motCleSearch !== null) {
         setIsSearching(true);
         let result = await MusicService.searchVideoByWord(motCleSearch).then(
            (res) => {
               setIsSearching(false);
               return res.data;
            }
         );
         setAllResultFromSearch(result);
      }
   };

   const convertSong = async (idVideo) => {
      setIsConvert(true);
      await MusicService.convertToMp3(idVideo).then((res) => {
         setLinkToDownload(res.data.link);
         setIsConvert(false);
      });
   };

   return (
      <div className="container_download">
         <div className="landing_download">
            <BackgroundSlideshow images={[alb_1, alb_2, alb_4, alb_3, alb_5]} />
            <HashLink to="#search">
               <button>{t('start_download')}</button>
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
                     placeholder="Enter key here ..."
                     onChange={(e) => onHandleChangeInput(e)}
                  />
                  <div className="icon_search">
                     <i
                        className="fa fa-search"
                        onClick={() => searching()}
                     ></i>
                  </div>
               </div>
               <div className="instruction_search">
                  <p>
                     {t('indication_before_usage')}{' '}
                     <Link to="/term-of-use" className="term_of_use">
                        {t('condition_utilisation_text')}
                     </Link>
                  </p>
               </div>
            </div>
            <div className="div_result">
               {allResultFromSearch.length !== 0 && (
                  <div className="information_result">
                     <p>
                        {t('information_before_result_part_one')} "
                        {motCleSearch ?? motCleSearch}
                        ". {t('information_before_result_part_two')}{' '}
                        {allResultFromSearch.length}{' '}
                        {t('information_before_result_part_three')}
                     </p>
                  </div>
               )}
               {isSearching && <Loading />}
               <div className="all_result_from_search">
                  {allResultFromSearch.map((one_result) => (
                     <Fragment key={one_result.etag}>
                        {streaming.playing &&
                           streaming.idVideoToPlay ===
                              one_result.id.videoId && (
                              <div className="container_video_playing">
                                 <iframe
                                    className="video_sharing"
                                    title={one_result.snippet.title}
                                    height="280"
                                    src={`https://www.youtube.com/embed/${one_result.id.videoId}`}
                                 ></iframe>
                              </div>
                           )}
                        <Result
                           titre={one_result.snippet.title}
                           source={one_result.snippet.channelTitle}
                           urlVideo={`https://www.youtube.com/watch?v=${one_result.id.videoId}`}
                           id={one_result.id.videoId}
                           setLinkToDownload={setLinkToDownload}
                        />
                        {downloading.download &&
                           downloading.idVideoToDownload ===
                              one_result.id.videoId && (
                              <div className="container_button_download">
                                 <h3 style={{ fontSize: '14px' }}>
                                    {one_result.snippet.title}
                                 </h3>
                                 <p>
                                    <i className="fa fa-music"></i>{' '}
                                    {t('indication_relative_file')}
                                 </p>
                                 {linkToDownload !== null &&
                                    one_result.id.videoId ===
                                       downloading.idVideoToDownload && (
                                       <a
                                          className="bouton_to_download"
                                          href={linkToDownload}
                                          style={{ marginBottom: '8px' }}
                                       >
                                          <button
                                             style={{
                                                backgroundColor: '#a8cf45',
                                             }}
                                          >
                                             {t('boutton_down_mp3')}
                                          </button>
                                       </a>
                                    )}
                                 <div className="bouton_to_convert">
                                    <button
                                       style={{ backgroundColor: '#0098da' }}
                                       onClick={() =>
                                          convertSong(one_result.id.videoId)
                                       }
                                    >
                                       {isConvert
                                          ? t('conversion')
                                          : t('boutton_convert_mp3')}
                                    </button>
                                    <button
                                       style={{ backgroundColor: '#0098da' }}
                                    >
                                       {t('boutton_down_mp4')}
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
                     <i className="fa fa-bomb"></i>{' '}
                     {t('indication_relative_latest')}{' '}
                     <i className="fa fa-bomb"></i>
                  </p>
               </div>
               <Link to="/latest-music">
                  <button>
                     <i className="fa fa-music"></i> {t('boutton_latest')}
                  </button>
               </Link>
            </div>
         </div>
      </div>
   );
}

export default Download;
