import { useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import '../../styles/components/Slideshow/slideshow.scss'

export function Slideshow({ pictures }) {
   const [currentIndex, setCurrentIndex] = useState(0);
  
   // Vérifier si une seule image est disponible
   const isSingleImage = pictures.length <= 1;
 
   // Fonction pour aller à l'image précédente
   const prevSlide = () => {
     setCurrentIndex((prevIndex) => (prevIndex === 0 ? pictures.length - 1 : prevIndex - 1));
   };
 
   // Fonction pour aller à l'image suivante
   const nextSlide = () => {
     setCurrentIndex((prevIndex) => (prevIndex === pictures.length - 1 ? 0 : prevIndex + 1));
   };
 
   return (
     <div className="carousel">
       {!isSingleImage && (
         <button className="carousel__button carousel__button--prev" onClick={prevSlide}>
           <FontAwesomeIcon icon={faChevronLeft} />
         </button>
       )}
       <div className="carousel__slides" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
         {pictures.map((picture, index) => (
           <div key={index} className="carousel__slide">
             <img src={picture} alt={`Slide ${index}`} />
           </div>
         ))}
       </div>
       {!isSingleImage && (
         <button className="carousel__button carousel__button--next" onClick={nextSlide}>
           <FontAwesomeIcon icon={faChevronRight} />
         </button>
       )}
       <div className="carousel__counter">
         {currentIndex + 1} / {pictures.length}
       </div>
     </div>
   );
 }

// Validation des props
Slideshow.propTypes = {
   pictures: PropTypes.arrayOf(PropTypes.string).isRequired,
 };