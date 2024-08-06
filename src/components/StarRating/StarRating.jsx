import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import '../../styles/components/starRating/starRating.scss';

export function StarRating({ rating }) {
  const starCount = 5;
  const filledStars = Math.round(rating); // Nombre d'étoiles remplies

  // Création d'un tableau d'étoiles en fonction du nombre rempli
  const stars = [];
  for (let i = 1; i <= starCount; i++) {
    let starClass = 'star';
    if (i <= filledStars) {
      starClass += ' star__filled';
    }
    stars.push(
      <span key={i} className={starClass}>
        <FontAwesomeIcon icon={faStar} />
      </span>
    );
  }

  return <div className="star-rating">{stars}</div>;
}


StarRating.propTypes = {
  rating: PropTypes.string.isRequired,
};
