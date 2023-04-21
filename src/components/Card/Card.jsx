import React from 'react';

const Card = ({id, title, image, species, gender, handleInfo}) => {
  
  const width = {width:"18rem"};

  return (
    <>
      <div className="card m-4 shadow-lg" style={width}>
        <img src={image} className="card-img-top" alt="card-img" />
        <div className="card-body">
          <h5 className="card-title"> {title} </h5>
          <p className="card-text">Especie: {species} Genero: {gender} </p>
          <div className='d-flex justify-content-around'>
            <button className="btn btn-success">Guardar</button>
            <button className="btn btn-outline-primary" onClick={ ()=>{handleInfo(id)} }>+ Detalles</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;