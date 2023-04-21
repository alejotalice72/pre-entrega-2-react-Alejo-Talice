import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useFetch from '../utils/useFetch';
import { routes } from '../routes';

const DetailView = () => {
  
  const { cardId } = useParams();
  const BASE_URL = 'https://rickandmortyapi.com/api/character/' + cardId;

  const [ dataFromObject, {name, image, gender, species} ] = useFetch(BASE_URL);
  
  const { root } = routes;
  const navigator = useNavigate();
  const handleBack = () => {
    navigator(root);
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-4">
            <img src={image} alt="" className='img-fluid' />
          </div>
          <div className="col-8">
            <h3> {name} </h3>
            <p> {species} {gender} </p>
            <button className='btn btn-danger' onClick={handleBack}>Volver</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailView;