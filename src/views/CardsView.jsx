import React from 'react';
import useFetch from '../utils/useFetch';
import Card from '../components/Card/Card';


const CardsView = () => {
  const BASE_URL = 'https://rickandmortyapi.com/api/character';
  const [data] = useFetch(BASE_URL);
  return (
    <>
      <div className='container text-center'>
        <div className='d-flex flex-row flex-wrap justify-content-center'>
          {data.map((element, index)=>{
            return <Card title={element.name} image={element.image} species={element.species} gender={element.gender} key={index} />;
          })}
        </div>
      </div>
    </>
  );
};

export default CardsView;