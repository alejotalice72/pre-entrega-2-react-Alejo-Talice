import React from 'react';
import { useNavigate } from 'react-router-dom';
import useFetch from '../utils/useFetch';
import Card from '../components/Card/Card';

const CardsView = () => {

  const BASE_URL = 'https://rickandmortyapi.com/api/character';
  const [data] = useFetch(BASE_URL);

  const navigator = useNavigate();

  const handleInfo = (id) => {
    let cardId = id;
    navigator('/detail/'+cardId)
  };

  return (
    <>
      <div className='container text-center'>
        <div className='d-flex flex-row flex-wrap justify-content-center'>
          {data.map((element, index)=>{
            return <Card id={element.id} title={element.name} image={element.image} species={element.species} gender={element.gender} key={index} handleInfo={handleInfo} />;
          })}
        </div>
      </div>
    </>
  );
};

export default CardsView;