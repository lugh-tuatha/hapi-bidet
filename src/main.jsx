import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import Letter from './pages/Letter'
import Wish from './pages/Wish'
import Art from './pages/Art'
import Music from './pages/Music'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/letter",
    element: <Letter />,
  },
  {
    path: "/wish",
    element: <Wish />,
  },
  {
    path: "/art",
    element: <Art />,
  },
  {
    path: "/music",
    element: <Music />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
