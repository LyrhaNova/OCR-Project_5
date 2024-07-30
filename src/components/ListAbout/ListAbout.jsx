import { useState } from 'react';
import '../../styles/components/listAbout/listAbout.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'

const words = [
  { word: 'Fiabilité', description: 'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.' },
  { word: 'Respect', description: 'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre platforme.' },
  { word: 'Service', description: 'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre platforme.' },
  { word: 'Sécurité', description: "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par no services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes." }
];

export function ListAbout() {
   const [expandedWords, setExpandedWords] = useState([]);
 
   const toggleDescription = (word) => {
     if (expandedWords.includes(word)) {
       setExpandedWords(expandedWords.filter(w => w !== word));
     } else {
       setExpandedWords([...expandedWords, word]);
     }
   };

   return (
      <section className="listContainer">
        <ul>
          {words.map(word => (
            <li key={word.word} className="listContainer__li">
               <div className="listContainer__header">
                  <h3 className='listContainer__word'>{word.word}</h3>
                  <i className='icon' onClick={() => toggleDescription(word.word)}>
                     {/* Utilisation de condition ternaire : si 'expandeWors.includes(word.word) est true */}
                     {/* alors l'icone 'faChevronUp' est affichée, sinon l'icon down est affichée */}
                    {expandedWords.includes(word.word) ? <FontAwesomeIcon icon={faChevronUp} /> : <FontAwesomeIcon icon={faChevronDown} />}
                  </i>
               </div>
               {expandedWords.includes(word.word) && (
                 <div className="listContainer__description">
                   <p>{word.description}</p>
                 </div>
               )}
            </li>
          ))}
        </ul>
      </section>
    );
}

// export function ListAbout() {
//    const [expandedWords, setExpandedWords] = useState([]);
 
//    const toggleDescription = (word) => {
//      if (expandedWords.includes(word)) {
//        setExpandedWords(expandedWords.filter(w => w !== word));
//      } else {
//        setExpandedWords([...expandedWords, word]);
//      }
//    };

//    return (
//       <section className="listContainer">
//         <ul>
//           {words.map(word => (
//             <li key={word.word} className="listContainer__li">
//                <h3 className='listContainer__word'>{word.word}</h3>
//                 <i className='icon' onClick={() => toggleDescription(word.word)}>
//                 {arrowUp}
//                 </i>
//                 {expandedWords.includes(word.word) && (
//                   <div className="listContainer__description">
//                     <p>{word.description}</p>
//                   </div>
//                 )}
//             </li>
//           ))}
//         </ul>
//       </section>
//     );
//   }