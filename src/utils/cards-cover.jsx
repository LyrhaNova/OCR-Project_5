// import React, { useEffect, useState } from 'react';
// import { Cards } from '../components/Cards/cards'
// import '../../styles/components/cards/cards.scss';

// const Cardscover = () => {
//    const [logements, setLogements] = useState([]);
 
//    const getData = () => {
//      fetch('/path/to/logements.json') // Assurez-vous que ce chemin est correct
//        .then(response => {
//          if (!response.ok) {
//            throw new Error('Network response was not ok');
//          }
//          return response.json();
//        })
//        .then(data => {
//          console.log('Data loaded:', data); // Vérifiez les données
//          setLogements(data); // Met à jour l'état avec les données
//        })
//        .catch(error => {
//          console.error('Fetch error:', error);
//        });
//    };
 
//    useEffect(() => {
//      getData();
//    }, []);
 
//    return (
//      <div>
//        <Cards logements={logements} /> {/* Passez les props ici */}
//      </div>
//    );
//  };
 
//  export default Cardscover;