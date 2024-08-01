// import { useState } from 'react';
// import { Collapse } from 'react-collapse';
// import '../../styles/components/listAbout/listAbout.scss';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

// const words = [
//   { word: 'Fiabilité', description: 'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.' },
//   { word: 'Respect', description: 'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.' },
//   { word: 'Service', description: 'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.' },
//   { word: 'Sécurité', description: "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes." }
// ];

// export function ListAbout() {
//   const [expandedWords, setExpandedWords] = useState([]);

//   const toggleDescription = (word) => {
//     if (expandedWords.includes(word)) {
//       setExpandedWords(expandedWords.filter(w => w !== word));
//     } else {
//       setExpandedWords([...expandedWords, word]);
//     }
//   };

//   return (
//     <section className="listContainer">
//       <ul>
//         {words.map(word => (
//           <li key={word.word} className="listContainer__li">
//             <div className="listContainer__header">
//               <h3 className='listContainer__word'>{word.word}</h3>
//               <FontAwesomeIcon
//                 icon={faChevronUp}
//                 className={expandedWords.includes(word.word) ? 'rotate' : ''}
//                 onClick={() => toggleDescription(word.word)}
//               />
//             </div>
//             <Collapse isOpened={expandedWords.includes(word.word)}>
//               <div className={`listContainer__description ${expandedWords.includes(word.word) ? 'open' : 'close'}`}>
//                 <p className='listContainer__descriptionText'>{word.description}</p>
//               </div>
//             </Collapse>
//           </li>
//         ))}
//       </ul>
//     </section>
//   );
// }

import { CollapsibleItem } from '../CollapsibleItem/collapsibleItem';
import '../../styles/components/listAbout/listAbout.scss';

const words = [
  { word: 'Fiabilité', description: 'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.' },
  { word: 'Respect', description: 'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.' },
  { word: 'Service', description: 'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.' },
  { word: 'Sécurité', description: "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes." }
];

export function ListAbout() {
  return (
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
  );
}
