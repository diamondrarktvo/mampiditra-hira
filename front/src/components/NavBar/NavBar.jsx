import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './NavBar.css';
import logo from '../../assets/images/logo.png';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const NavBar = () => {
   const { t, i18n } = useTranslation();
   const [isOpenModal, setIsOpenModal] = useState(false);
   const onHandleChangeLanguage = (e) => {
      let langueChoice = e.target.value;
      i18n.changeLanguage(langueChoice);
      closeModal();
   };

   const openModal = () => {
      setIsOpenModal(!isOpenModal);
   };

   const closeModal = () => {
      setIsOpenModal(false);
   };

   return (
      <div className="container_navbar">
         <Link to="/">
            <img src={logo} alt="Logo de notre site" />
         </Link>
         <div className="menu">
            <div className="main_menu">
               <ul>
                  <Link to="/">
                     <li className="item_nav">{t('accueil_item_nav')}</li>
                  </Link>
                  <Link to="/telechargement">
                     <li className="item_nav">{t('telecharger_item_nav')} </li>
                  </Link>
                  <HashLink to="/#faq">
                     <li className="item_nav">{t('faq_item_nav')}</li>
                  </HashLink>
                  <HashLink to="/#about">
                     <li className="item_nav">{t('about_item_nav')}</li>
                  </HashLink>
               </ul>
            </div>
            <div className="other_menu">
               <HashLink to="/#contact">
                  <p className="item_nav">{t('contact_item_nav')}</p>
               </HashLink>
               <select onChange={(e) => onHandleChangeLanguage(e)}>
                  <option value="en">English</option>
                  <option value="mg">Malagasy</option>
                  <option value="fr">Français</option>
               </select>
            </div>
         </div>

         <Link to="/telechargement" className="brand_title_navigation">
            <h2>MP3 DOWNLOADER GASY</h2>
         </Link>

         <div className="humberger-menu" onClick={() => openModal()}>
            <i className="fa fa-music"></i>
         </div>

         <div
            className={
               isOpenModal ? 'popover_menu_humberger' : 'hide_menu_burger'
            }
            id="humberger_menu_content"
         >
            <div className="popover_main_menu">
               <ul>
                  <Link to="/">
                     <li className="popover_item_nav" onClick={closeModal}>
                        {t('accueil_item_nav')}
                     </li>
                  </Link>
                  <Link to="/telechargement">
                     <li className="popover_item_nav" onClick={closeModal}>
                        {t('telecharger_item_nav')}{' '}
                     </li>
                  </Link>
                  <HashLink to="/#faq">
                     <li className="popover_item_nav" onClick={closeModal}>
                        {t('faq_item_nav')}
                     </li>
                  </HashLink>
                  <HashLink to="/#about">
                     <li className="popover_item_nav" onClick={closeModal}>
                        {t('about_item_nav')}
                     </li>
                  </HashLink>
                  <HashLink to="/#contact">
                     <li className="popover_item_nav" onClick={closeModal}>
                        {t('contact_item_nav')}
                     </li>
                  </HashLink>
                  <select onChange={(e) => onHandleChangeLanguage(e)}>
                     <option value="en">English</option>
                     <option value="mg">Malagasy</option>
                     <option value="fr">Français</option>
                  </select>
               </ul>
            </div>
         </div>
      </div>
   );
};

export default NavBar;
