import { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import '../../styles/components/collapse/collapse.scss';

export function CollapsibleItem({ className, word, description }) {
  // État pour gérer l'ouverture/fermeture du collapsible
  const [isOpen, setIsOpen] = useState(false);
  // Référence pour accéder au contenu de la description
  const descriptionRef = useRef(null);

  const toggleDescription = () => {
    setIsOpen(!isOpen);
  };

  // Gestion de l'événement au clavier pour l'icône
  const handleKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      toggleDescription();
    }
  };

  // Effet useEffect pour ajuster la hauteur maximale de la description en fonction de son contenu
  useEffect(() => {
    if (descriptionRef.current) {
      const descriptionElement = descriptionRef.current;
      if (isOpen) {
        descriptionElement.style.maxHeight = `${descriptionElement.scrollHeight}px`;
      } else {
        descriptionElement.style.maxHeight = '0';
      }
    }
  }, [isOpen]);

  // Rendu du composant
  return (
    <li className={`listContainer__li ${className}`}>
      <div className="listContainer__header">
        <h3 className='listContainer__word'>{word}</h3>
        <FontAwesomeIcon
          icon={faChevronUp}
          className={isOpen ? 'rotate' : ''}
          onClick={toggleDescription}
          tabIndex="0"
          onKeyDown={handleKeyDown}
          aria-expanded={isOpen}
          aria-label={`Toggle ${word}`}
        />
      </div>
      <div
        className={`listContainer__description ${isOpen ? 'open' : ''}`}
        ref={descriptionRef}
      >
        {/* Condition pour afficher la description sous forme de liste ou de paragraphe */}
        {Array.isArray(description) ? (
          <ul className="listContainer__descriptionList">
            {description.map((item, index) => (
              <li key={index} className="listContainer__descriptionListItem">
                {item}
              </li>
            ))}
          </ul>
        ) : (
          <p className='listContainer__descriptionText'>{description}</p>
        )}
      </div>
    </li>
  );
}

CollapsibleItem.propTypes = {
  className: PropTypes.string,
  word: PropTypes.string.isRequired,
  description: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ]).isRequired,
};
