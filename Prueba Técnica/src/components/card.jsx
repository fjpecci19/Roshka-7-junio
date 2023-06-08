import React from 'react';
import "./card.css"
import axios from 'axios'
import { useState, useEffect } from 'react';

function Card() {

  const [info, setInfo] = useState([])

  const llamar = () => {
    axios.get("https://rickandmortyapi.com/api/character")
    .then(result => {
      setInfo(result.data.results)
    })
  }

  useEffect(() => {
    llamar()
  })

  return (
    <div>
      <div>
        <h2>Rick and Morty characters</h2>
      </div>
      <h2></h2>
        <div className='container d-flex  justify-content-center align-items-center flex-wrap'>
          {info.map((informacion, index) => (
          <div key={index} className='row m-5'>
            <div className='col-md-3'>
              <div className="card" style={{ width: '15rem' }}>
                <img src={informacion.image} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{informacion.name}</h5>
                  <p className="card-text">{informacion.status}</p>
                </div>
              </div>
            </div>
          </div>
          ))}
        </div>
    </div>
  );
}

export default Card;
