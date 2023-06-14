import React from 'react'
import { Link } from 'react-router-dom/dist'
import "./App.css"

function App() {
  return (
    <div>
      <h2>Rick and Morty</h2>
      <div className='cuadro'>
        <Link to={"/"}>
          <img className='imag' src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Rick_and_Morty_title_card_%28cropped%29.png/330px-Rick_and_Morty_title_card_%28cropped%29.png"/>
        </Link>
      </div>
      <Link className='Link' to={"Pagina1"}><h2>See characters</h2></Link>
    </div>
  )
}

export default App
