import {Link} from 'react-router-dom';
import './error.css';
import bg_error from '../../assets/images/error_bg.png';

function Error() {
  return (
    <div className="container_error">
        <img src={bg_error} alt="404 not found" />
        <p>Revenir à la page d'accueil...</p>
        <Link to="/">
          <button>Accueil</button>
        </Link>
    </div>
  );
}

export default Error;
