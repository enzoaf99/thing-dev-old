import './main.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Home } from './elements/home/home';
import { Diseno } from './elements/services/diseno-web'
import { Navbar } from './elements/navbar/navbar';
import {Contact } from './elements/contact/contact'
import { Footer } from './elements/footer/footer';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/diseno-web",
    element: <Diseno />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <RouterProvider router={router} />
    <Contact />
    <Footer />
  </React.StrictMode>,
)
