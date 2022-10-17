import logo from '../../assets/images/logo.png';
import './home.css';

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" style={{borderRadius: "150px"}} />
        <p>
          Edit <code>src/App.js</code> and save to reload F5.
        </p>
        <p>{process.env.REACT_APP_MY_ENV_VARIABLE}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn mp3 gasy
        </a>
      </header>
    </div>
  );
}

export default Home;
