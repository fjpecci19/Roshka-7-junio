import React, {useState, useEffect} from "react"
import axios from 'axios'
import "./styles.css"

function Pagina5() {
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
      <div className='container d-flex  justify-content-center align-items-center flex-wrap'>
        {info.slice(12, 15).map((informacion, index) => (
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
      <div className='pagination-container'>
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          <li className="page-item"><a className="page-link" href="Pagina1">1</a></li>
          <li className="page-item"><a className="page-link" href="Pagina2">2</a></li>
          <li className="page-item"><a className="page-link" href="Pagina3">3</a></li>
          <li className="page-item"><a className="page-link" href="Pagina4">4</a></li>
          <li className="page-item"><a className="page-link" href="Pagina5">5</a></li>
          <li className="page-item"><a className="page-link" href="Pagina6">6</a></li>
          <li className="page-item"><a className="page-link" href="Pagina7">7</a></li>
        </ul>
      </nav>
    </div>
    </div>
  );
}

export default Pagina5
