import {Link} from 'react-router-dom';
import './error.css';

function Error() {
  return (
    <div className="container_error">
        <h1>
          Error page 404 Not found
        </h1>
        <p>Revenir à la page d'accueil...</p>
        <Link to="/">
          <button>Accueil</button>
        </Link>
    </div>
  );
}

export default Error;
