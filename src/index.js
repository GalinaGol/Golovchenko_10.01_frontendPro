import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Album from './components/Albums/Album';
import Dashboard from './components/Dashboard/Dashboard';
import Photo from './components/Photo/Photo';
import User from './components/User/User';

import './index.css';

import reportWebVitals from './reportWebVitals';




const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />
  },
  {
    path: "user/:userId",
    element: <User />
  },
  {
    path: "album/:albumId",
    element: <Album />
  },
  {
    path: "photo/:photoId",
    element: <Photo />
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


reportWebVitals();
