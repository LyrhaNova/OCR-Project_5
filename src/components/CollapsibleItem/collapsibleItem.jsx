import { useState } from 'react';
import { Collapse } from 'react-collapse';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import '../../styles/components/listAbout/listAbout.scss';

export function CollapsibleItem({ word, description }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDescription = () => {
    setIsOpen(!isOpen);
  };

  return (
    <li className="listContainer__li">
      <div className="listContainer__header">
        <h3 className='listContainer__word'>{word}</h3>
        <FontAwesomeIcon
          icon={faChevronUp}
          className={isOpen ? 'rotate' : ''}
          onClick={toggleDescription}
        />
      </div>
      <Collapse isOpened={isOpen}>
        <div className={`listContainer__description ${isOpen ? 'open' : 'close'}`}>
          <p className='listContainer__descriptionText'>{description}</p>
        </div>
      </Collapse>
    </li>
  );
}

CollapsibleItem.propTypes = {
   word: PropTypes.arrayOf(PropTypes.string).isRequired,
   description: PropTypes.arrayOf(PropTypes.string).isRequired,
 };