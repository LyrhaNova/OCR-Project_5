import PropTypes from 'prop-types';
import '../../styles/components/cards/cards.scss';

// Composant de carte individuelle
export const Card = ({ title, image, onClick }) => {

  // Gestion de l'événement au clavier
  const handleKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      onClick();
    }
  };

  return (
    <article
      className="cards"
      onClick={onClick}
      aria-label={title}
      tabIndex="0"
      onKeyDown={handleKeyDown}
    >
      <img src={image} alt={title} className="cards__image" />
      <div className='cards__overlay'>
        <h2 className="cards__title">{title}</h2>
      </div>
    </article>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
