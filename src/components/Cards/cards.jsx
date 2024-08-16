import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import '../../styles/components/cards/cards.scss';

// Composant de carte individuelle
const Card = ({ title, image, onClick }) => {

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



export function Cards() {
  const [logements, setLogements] = useState([]);
  const navigate = useNavigate();

  // Fonction pour récupérer les données des logements depuis un fichier JSON
  const getData = () => {
    fetch('../../../public/data/logements.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        // Mise à jour des données des logements dans l'état local
        setLogements(data);
      })
      .catch(error => {
        console.error('Fetch error:', error);
      });
  };

  // Utilisation de useEffect pour appeler getData une fois au chargement
  useEffect(() => {
    getData();
  }, []);

  // Gestion du clic sur une carte de logement, redirige vers la page de détails
  const handleCardClick = (id) => {
    navigate(`/accommodation/${id}`);
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

Card.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};