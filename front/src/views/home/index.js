import {HashLink} from 'react-router-hash-link';
import {Link} from 'react-router-dom';
import { useState, useEffect } from 'react';
import './home.css';

//components
import {TitleCustom} from '../../components';

//images pour brand one
import disque_ph from '../../assets/images/forgotten_disk.png';
import album_ph from '../../assets/images/forgotten_alb.jpeg';
import background_ph from '../../assets/images/backgroun_alb.png';



function Home() {
  const [screenWidth, setScreenWidth] = useState(getWindowSize()) //utile pour responsive faq
  const [screenHeight, setScreenHeight] = useState(getWindowSize()) //utile pour afficher le boutton up
  const degre = screenWidth >= 1400 ? [-16, 8, 13] : [0, 0, 0];
  console.log(screenHeight);
  /*Effet pour surveiller si l'écran a rediminuer ou élargit*/
  useEffect(() => {
    function onHandleWindowSize(){
      setScreenWidth(getWindowSize());
      setScreenHeight(getWindowSize())
    }
    window.addEventListener('resize', onHandleWindowSize);
    return() => {
      window.addEventListener('resize', onHandleWindowSize);
    }
  })
  /*Get le width de l'écran*/
  function getWindowSize (){
    const {innerWidth,innerHeight} = window;
    return {innerWidth, innerHeight}
  }
  return (
    <div className="Home" id="home">
        <HashLink to="/#home">
          <div className="goToTop">
                  Up
          </div>
        </HashLink>
        <div className="landing">
            <div className="content_landing">
              <h1 style={{fontSize: '4.5vmin'}}>MP3 DOWNLOADER GASY</h1>
              <h4>LoremAdipisicing aliquip ullamco consectetur non id reprehenderit eiusmod proident Lorem. 
                Eu id id pariatur aliqua dolore consequat consectetur enim aliquip esse ullamco aute nostrud 
                fugiat. Magna deserunt ex sint id qui culpa ad. Pariatur tempor ullamco dolor est aliqua do 
                esse voluptate proident adipisicing tempor. Esse sunt id nulla id cillum ad commodo aute labore. 
                Adipisicing do culpa consequat eu enim. Cupidatat laboris sit sunt incididunt anim esse voluptate
                dolor adipisicing nostrud velit culpa sit nulla.</h4>
              <div className="button_utils">
                  <Link to="/telechargement">
                    <button>
                      Get started
                    </button>
                  </Link>
                  <HashLink to="/#about">
                    <button>
                          More info
                    </button>
                  </HashLink>
              </div>
            </div>
        </div>
        <div className='section'>
          <div className='brand brand_one'>
            <div className='illustration'>
              <img className='image_brand_one background_ph' src={background_ph} alt="background" />
              <img className='image_brand_one disque_ph' src={disque_ph} alt="disque" />
              <img className='image_brand_one album_ph' src={album_ph} alt="album" />
            </div>
            <div className='description_brand'> 
                <TitleCustom title="Music" />
                <div className='info_description_brand'>
                  <h1>Download latest song or album</h1>
                  <p>ENostrud minim consectetur nisi Lorem cillum minim do. Magna mollit elit eiusmod ex cupidatat adipisicing dolore. In cillum eiusmod laborum proident anim non quis voluptate aliquip dolore quis. Qui ipsum duis officia est anim fugiat. Veniam tempor qui cillum adipisicing qui qui ea labore id eiusmod reprehenderit sunt.</p>
                  <Link to="/telechargement">
                    <button>Télecharger</button>
                  </Link>
                </div>
            </div>
          </div>

          <div className='brand_two' id="about">
            <TitleCustom title="About us" />
            <div className='description_about'>
                <p>Pariatur fugiat duis deserunt cupidatat aliqua officia adipisicing sunt nulla cupidatat. Dolor tempor consequat commodo nulla ex officia exercitation ad incididunt do est occaecat tempor. Consectetur adipisicing pariatur est labore commodo deserunt ipsum commodo ullamco ex. Velit officia esse ex in nisi incididunt Lorem proident consequat. Aliqua eu consectetur exercitation ex cupidatat pariatur mollit aliqua commodo nisi.</p>
            </div>
          </div>

          <div className='brand brand_three' id="faq">
              <TitleCustom title="FAQ" />
              <div className='question_faq'>
                  <div className='faq_content' style={{transform:`rotate(${degre[0]}deg)`}}>
                    <h3>Question 1 ?</h3>
                    <p>Amet incididunt in commodo fugiat.</p>
                  </div>
                  <div className='faq_content' style={{transform:`rotate(${degre[1]}deg)`}}>
                    <h3>Question 2 ?</h3>
                    <p>Veniam non adipisicing cupidatat culpa consequat ipsum fugiat voluptate ullamco. Nostrud mollit dolore nisi eu nisi id nostrud enim amet ea incididunt. Aliquip est do non cupidatat. Proident id sit ea dolor duis eiusmod. Proident sint ipsum aute ex ullamco dolore dolore dolore do nulla ullamco do aliquip est. Proident pariatur mollit deserunt nulla eiusmod fugiat officia et sit nisi qui nisi ad proident.</p>
                  </div>
                  <div className='faq_content' style={{transform:`rotate(${degre[2]}deg)`}}>
                    <h3>Question 3 ?</h3>
                    <p>Ut velit consequat ut nulla ea mollit.</p>
                  </div>
              </div>
          </div>
        </div>
    </div>
  );
}

export default Home;
