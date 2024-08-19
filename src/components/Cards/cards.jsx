import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/components/cards/cards.scss';
import { Card } from '../Card/card'

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