import { useParams, useNavigate  } from 'react-router-dom';
import { useState, useEffect } from 'react';
import jsonData from '../../public/data/logements.json';
import { Slideshow } from '../components/Slideshow/slideshow';
import { StarRating } from '../components/StarRating/StarRating'
import { CollapsibleItem } from '../components/CollapsibleItem/collapsibleItem'
import '../styles/pages/accommodationPage.scss'
import '../styles/components/collapse/collapse.scss'

export function Accommodation() {
  // useParams permet d'obtenir l'ID depuis l'url
  let { id } = useParams();
  const [currentLogement, setCurrentLogement] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Logement correspondant à l'id
    const foundLogement = jsonData.find(logement => logement.id === id);

      // Si aucun logement n'est trouvé, rediriger vers une page d'erreur
      if (!foundLogement) {
        navigate('../pages/ErrorPage');
        return;
      }

    setCurrentLogement(foundLogement);
  }, [id, navigate]);

    if (!currentLogement) {
      // Ne rien afficher pendant le chargement ou redirection
    return null; 
  }

  return (
    <section className="accommodation">
      <Slideshow pictures={currentLogement.pictures} />
      <div className='accommodation__container'>
        <div className='accommodation__container__infos'>
          <div className='accommodation__container__infos__title'>
            {currentLogement.title}
          </div>
          {currentLogement.location}
          <div className='accommodation__container__infos__tags'>
            {currentLogement.tags.map((tag, index) => (
              <span key={index} className='tag'>
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className='accommodation__container__details'>
          <div className='accommodation__container__details__owner'>
           {currentLogement.host.name}
           <img src={currentLogement.host.picture} alt={currentLogement.host.name} />
          </div>
          <div className='accommodation__container__details__rating'>
          <StarRating rating={currentLogement.rating} />
          </div>
        </div>
      </div>
      <div className='accommodation__collapse'>
      <CollapsibleItem
          word={"Description"}
          description={currentLogement.description}
          />
          <CollapsibleItem
          className="collapsible-item--equipments"
          word={"Équipements"}
          description={currentLogement.equipments}
          />
      </div>
    </section>
  );
}