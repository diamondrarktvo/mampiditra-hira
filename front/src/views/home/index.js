import {Link} from 'react-router-dom';
import './home.css';

function Home() {
  return (
    <div className="Home">
        <div className="landing">
            <div className="content_landing">
              <h2>MP3 DOWNLOADER GASY</h2>
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
                  <Link to="/about">
                    <button>
                          More info
                    </button>
                  </Link>
              </div>
            </div>
        </div>
    </div>
  );
}

export default Home;
