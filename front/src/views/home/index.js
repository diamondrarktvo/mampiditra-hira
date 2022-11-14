import logo from '../../assets/images/logo.png';
import { NavBar } from '../../components';
import './home.css';

function Home() {
  return (
    <div className="Home">
      <header className="Home-header">
          <NavBar />
      </header>
      <div>
          <img src={logo} className="Home-logo" alt="logo" style={{borderRadius: "150px"}} />
          <p>
            Edit <code>src/Home.js</code> and save to reload F5.
          </p>
          <p>{process.env.REACT_Home_MY_ENV_VARIABLE}</p>
          <a
            className="Home-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn mp3 gasy
          </a>
      </div>
    </div>
  );
}

export default Home;
