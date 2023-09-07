import './main.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Home } from './elements/home/home';
import { Diseno } from './elements/services/diseno-web'
import { Navbar, ResponsiveNav, ActiveLinkNav } from './elements/navbar/navbar';
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
    <Footer />
  </React.StrictMode>,
)

ResponsiveNav();
ActiveLinkNav();