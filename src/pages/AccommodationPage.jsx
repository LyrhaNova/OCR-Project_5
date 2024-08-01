import { useParams, useNavigate  } from 'react-router-dom';
import { useState, useEffect } from 'react';
import jsonData from '../../public/data/logements.json';
// import '../styles/components/Accomodation/accommodation.scss';
import { Slideshow } from '../components/Slideshow/slideshow';

export function Accommodation() {
  // useParams permet d'obtenir l'ID depuis l'url
  let { id } = useParams();
  const [currentLogement, setCurrentLogement] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Vérifie les valeurs de id et jsonData
    console.log('Logement ID:', id);
    console.log('JSON Data:', jsonData);

    // Logement correspondant à l'id
    const foundLogement = jsonData.find(logement => logement.id === id);

    // Debug: vérifier le logement trouvé
    console.log('Found Logement:', foundLogement);

      // Si aucun logement n'est trouvé, rediriger vers une page d'erreur
      if (!foundLogement) {
        navigate('../pages/ErrorPage'); // Assurez-vous que '/error' est le chemin vers votre page d'erreur
        return;
      }

    setCurrentLogement(foundLogement);
  }, [id, navigate]);

    if (!currentLogement) {
      // Ne rien afficher pendant le chargement ou redirection
      // Si la page Error est utilisé ici, elle s'affichera brièvement
    return null; 
  }

  return (
    <section className="accommodation">
      <Slideshow pictures={currentLogement.pictures} />
      <div style={{ fontSize: "50px" }}>
        {currentLogement.title}
      </div>
    </section>
  );
}
