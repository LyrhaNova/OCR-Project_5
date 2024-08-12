import { useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import '../../styles/components/Slideshow/slideshow.scss';


export function Slideshow({ pictures }) {
  // État pour suivre l'index de l'image actuelle
  const [currentIndex, setCurrentIndex] = useState(0);
  const isSingleImage = pictures.length <= 1;

  // Fonction pour passer à l'image précédente
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? pictures.length - 1 : prevIndex - 1));
  };

  // Fonction pour passer à l'image suivante
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === pictures.length - 1 ? 0 : prevIndex + 1));
  };

  // Rendu du composant Slideshow
  return (
    <div className="carousel">
      {/* Bouton précédent, affiché seulement s'il y a plus d'une image */}
      {!isSingleImage && (
        <button className="carousel__button carousel__button--prev" onClick={prevSlide}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
      )}
      {/* Conteneur des slides avec la transformation CSS pour changer d'image */}
      <div className="carousel__slides" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {/* Mapping à travers les images pour les afficher */}
        {pictures.map((picture, index) => (
          <div key={index} className="carousel__slide">
            <img src={picture} alt={`Slide ${index}`} />
          </div>
        ))}
      </div>
      {/* Bouton suivant, affiché seulement s'il y a plus d'une image */}
      {!isSingleImage && (
        <button className="carousel__button carousel__button--next" onClick={nextSlide}>
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      )}
      {/* Affichage du compteur de slides actuelle */}
      <div className="carousel__counter">
        {currentIndex + 1} / {pictures.length}
      </div>
    </div>
  );
}

Slideshow.propTypes = {
  pictures: PropTypes.arrayOf(PropTypes.string).isRequired,
};
