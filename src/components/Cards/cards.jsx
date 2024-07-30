import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import '../../styles/components/cards/cards.scss';

const Card = ({ title, image, onClick }) => {
  return (
    <article className="cards" onClick={onClick}>
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

export function Cards() {
  const [logements, setLogements] = useState([]);
  const navigate = useNavigate();

  // Fonction pour récupérer les données
  const getData = () => {
    fetch('../../../public/data/logements.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        // console.log('Data loaded:', data);
        // Mise à jour des données
        setLogements(data);
      })
      .catch(error => {
        console.error('Fetch error:', error);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  const handleCardClick = (id) => {
    // Redirection vers la page de détails
    navigate(`/accommodation/${id}`);
    // navigate(`accommodation${id}`);
  };

  if (!Array.isArray(logements) || logements.length === 0) {
    return <p>Loading...</p>;
  }

  return (
    <section className="layout-cards">
      <div className='layout-cards__container'>
        {logements.map(logement => (
          <Card 
            key={logement.id} 
            title={logement.title} 
            image={logement.cover} 
            onClick={() => handleCardClick(logement.id)}
          />
        ))}
      </div>
    </section>
  );
}

Cards.propTypes = {
  logements: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      cover: PropTypes.string.isRequired
    })
  )
};