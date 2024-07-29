import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import '../../styles/components/cards/cards.scss';

const Card = ({ title, image }) => {
   return (
      
     <article className="cards">
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
 };
 
 export function Cards() {
   const [logements, setLogements] = useState([]);
 
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
         console.log('Data loaded:', data);
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


// const Card = ({ title, image }) => {
//    return (
//      <div className="card">
//        <img src={image} alt={title} className="card__image" />
//        <h3 className="card__title">{title}</h3>
//      </div>
//    );
//  };
 
//  Card.propTypes = {
//    title: PropTypes.string.isRequired,
//    image: PropTypes.string.isRequired,
//  };
 
//  export function Cards({ logements }) {
//    if (!Array.isArray(logements) || logements.length === 0) {
//      return <p>Loading...</p>; // Affiche un message pendant le chargement des données
//    }
 
//    return (
//      <section className="layout-cards">
//        <div className='layout-cards__container'>
//          <div className='layout-cards__cards'>
//            <h2>Titre de la location</h2>
//            {logements.map(logement => (
//              <Card 
//                key={logement.id} 
//                title={logement.title} 
//                image={logement.cover} 
//              />
//            ))}
//          </div>
//        </div>
//      </section>
//    );
//  }
 
//  Cards.propTypes = {
//    logements: PropTypes.arrayOf(
//      PropTypes.shape({
//        id: PropTypes.string.isRequired, // `id` est une chaîne dans votre JSON
//        title: PropTypes.string.isRequired,
//        cover: PropTypes.string.isRequired
//      })
//    ).isRequired
//  };