import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import '../../styles/components/collapse/collapse.scss';

export function CollapsibleItem({ className, word, description }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const toggleDescription = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setIsOpen(!isOpen);
    }
  };

  const handleAnimationEnd = () => {
    setIsAnimating(false);
  };

  // return (
  //   <li className="listContainer__li">
  //     <div className="listContainer__header" onClick={toggleDescription}>
  //       <h3 className='listContainer__word'>{word}</h3>
  //       <FontAwesomeIcon
  //         icon={faChevronUp}
  //         className={isOpen ? 'rotate' : ''}
  //       />
  //     </div>
  //     <div
  //       className={`listContainer__description ${isOpen ? 'open' : 'close'}`}
  //       onAnimationEnd={handleAnimationEnd}
  //     >
  //       <p className='listContainer__descriptionText'>{description}</p>
  //     </div>
  //   </li>
  // );
  return (
    <li className={`listContainer__li ${className}`}>
      <div className="listContainer__header" onClick={toggleDescription}>
        <h3 className='listContainer__word'>{word}</h3>
        <FontAwesomeIcon
          icon={faChevronUp}
          className={isOpen ? 'rotate' : ''}
        />
      </div>
      <div
        className={`listContainer__description ${isOpen ? 'open' : 'close'}`}
        onAnimationEnd={handleAnimationEnd}
      >
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