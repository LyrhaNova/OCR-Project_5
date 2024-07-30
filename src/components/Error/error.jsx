// import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/components/Error/error.scss'

export function ErrorComponent() {
  const navigate = useNavigate();

  const handleReturnClick = () => {
    navigate('/');
  };

  return (
    <div className="errorPage">
      <h3 className='errorPage__404'>404</h3>
      <p className='errorPage__text'>Oups! La page que<br className='errorPage__br'/> vous avez demandée n&apos;existe pas.</p>
      <p className="errorPage__return" onClick={handleReturnClick}>
        Retourner sur la page d&apos;accueil
      </p>
    </div>
  );
}
