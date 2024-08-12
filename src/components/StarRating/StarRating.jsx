import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import '../../styles/components/starRating/starRating.scss';


export function StarRating({ rating }) {
  const starCount = 5;
  
  // Nombre d'étoiles remplies, arrondi à l'entier le plus proche
  const filledStars = Math.round(parseFloat(rating));

  // Tableau qui contiendra les composants d'étoiles à afficher
  const stars = [];
  for (let i = 1; i <= starCount; i++) {
    let starClass = 'star';
    if (i <= filledStars) {
      starClass += ' star__filled';
    }
    // Ajoute un composant d'étoile au tableau avec FontAwesomeIcon
    stars.push(
      <span key={i} className={starClass}>
        <FontAwesomeIcon icon={faStar} />
      </span>
    );
  }

  return <div className="star-rating">{stars}</div>;
}

StarRating.propTypes = {
  rating: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
};
