import { HeroHeaderAbout } from '../components/HeroHeaderAbout/heroheader_about'
import { CollapsibleItem } from '../components/CollapsibleItem/collapsibleItem'



export function About() {
  const words = [
    { word: 'Fiabilité', description: 'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.' },
    { word: 'Respect', description: 'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.' },
    { word: 'Service', description: 'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.' },
    { word: 'Sécurité', description: "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes." }
  ];
   return (
     <>
     <HeroHeaderAbout />
     <section className="listContainer">
      <ul>
        {words.map(word => (
          <CollapsibleItem
            key={word.word}
            word={word.word}
            description={word.description}
          />
        ))}
      </ul>
    </section>
     </>
   )
 }
 