import {HashLink} from 'react-router-hash-link';
import {Link} from 'react-router-dom';
import './home.css';

//components
import {TitleCustom} from '../../components';

//images pour brand one
import disque_ph from '../../assets/images/forgotten_disk.png';
import album_ph from '../../assets/images/forgotten_alb.jpeg';
import background_ph from '../../assets/images/backgroun_alb.png';


function Home() {
  return (
    <div className="Home">
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

          <div className='brand brand_two'>
            
          </div>

          <div className='brand brand_three'>
            
          </div>
        </div>
    </div>
  );
}

export default Home;
