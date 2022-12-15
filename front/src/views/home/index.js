import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './home.css';

//components
import { TitleCustom } from '../../components';

//images pour brand one
import disque_ph from '../../assets/images/forgotten_disk.png';
import album_ph from '../../assets/images/forgotten_alb.jpeg';
import background_ph from '../../assets/images/backgroun_alb.png';

function Home() {
   const { t } = useTranslation();
   const [screenWidth, setScreenWidth] = useState(getWindowSize().innerWidth); //utile pour responsive faq
   const [screenHeight, setScreenHeight] = useState(0); //utile pour afficher le boutton up
   const degre = screenWidth >= 1400 ? [-16, 3, 13] : [0, 0, 0];

   /*Effet pour surveiller si l'écran a rediminuer ou élargit*/
   useEffect(() => {
      function onHandleWindowSize() {
         setScreenWidth(getWindowSize().innerWidth);
      }
      window.addEventListener('resize', onHandleWindowSize);
      return () => {
         window.addEventListener('resize', onHandleWindowSize);
      };
   });

   /*Get le width de l'écran*/
   function getWindowSize() {
      const { innerWidth } = window;
      return { innerWidth };
   }

   /*detect if user scroll page*/
   window.addEventListener('scroll', (e) => {
      setScreenHeight(window.scrollY);
   });

   return (
      <div className="Home" id="home">
         {screenHeight >= 200 && (
            <HashLink to="/#home">
               <div className="goToTop">
                  <i className="fa fa-solid fa-arrow-up"></i>
               </div>
            </HashLink>
         )}
         <div className="landing">
            <div className="content_landing">
               <h1 style={{ fontSize: '4.5vmin' }}>MP3 DOWNLOADER GASY</h1>
               <h4>{t('message_landing')}</h4>
               <div className="button_utils">
                  <Link to="/telechargement">
                     <button>{t('bouton_started_landing')} </button>
                  </Link>
                  <HashLink to="/#about">
                     <button>{t('bouton_more_landing')} </button>
                  </HashLink>
               </div>
            </div>
         </div>
         <div className="section">
            <div className="brand brand_one">
               <div className="illustration">
                  <img
                     className="image_brand_one background_ph"
                     src={background_ph}
                     alt="background"
                  />
                  <img
                     className="image_brand_one disque_ph"
                     src={disque_ph}
                     alt="disque"
                  />
                  <img
                     className="image_brand_one album_ph"
                     src={album_ph}
                     alt="album"
                  />
               </div>
               <div className="description_brand">
                  <TitleCustom title={t('title_custom_brand_one')} />
                  <div className="info_description_brand">
                     <h1>{t('sous_titre_brand_one')}</h1>
                     <p>{t('texte_brand_one')}</p>
                     <Link to="/telechargement">
                        <button>{t('boutton_download_brand_one')} </button>
                     </Link>
                  </div>
               </div>
            </div>

            <div className="brand_two" id="about">
               <TitleCustom title={t('title_custom_brand_two')} />
               <div className="description_about">
                  <p>{t('texte_brand_two')}</p>
               </div>
            </div>

            <div className="brand brand_three" id="faq">
               <TitleCustom title={t('title_custom_brand_three')} />
               <div className="question_faq">
                  <div
                     className="faq_content"
                     style={{ transform: `rotate(${degre[0]}deg)` }}
                  >
                     <h3>{t('label_question')} 1 ?</h3>
                     <p>{t('response_1')} </p>
                  </div>
                  <div
                     className="faq_content"
                     style={{ transform: `rotate(${degre[1]}deg)` }}
                  >
                     <h3>{t('label_question')} 2 ?</h3>
                     <p>{t('response_2')}</p>
                  </div>
                  <div
                     className="faq_content"
                     style={{ transform: `rotate(${degre[2]}deg)` }}
                  >
                     <h3>{t('label_question')} 3 ?</h3>
                     <p>{t('response_3')} </p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

export default Home;
