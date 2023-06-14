import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Pagina1 from './Views/pagina1.jsx'
import Pagina2 from './Views/pagina2.jsx'
import Pagina3 from './Views/pagina3.jsx'
import Pagina4 from './Views/pagina4.jsx'
import Pagina5 from './Views/pagina5.jsx'
import Pagina6 from './Views/pagina6.jsx'
import Pagina7 from './Views/pagina7.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: "Pagina1",
    element: <Pagina1/>
  },
  {
    path: "Pagina2",
    element: <Pagina2/>
  },
  {
    path: "Pagina3",
    element: <Pagina3/>
  },
  {
    path: "Pagina4",
    element: <Pagina4/>
  },
  {
    path: "Pagina5",
    element: <Pagina5/>
  },
  {
    path: "Pagina6",
    element: <Pagina6/>
  },
  {
    path: "Pagina7",
    element: <Pagina7/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
