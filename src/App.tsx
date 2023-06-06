import React from 'react';
import './App.scss';
import ShoesTable from './containers/pages/shoes/ShoesTable';
import HomePage from './containers/pages/homePage/HomePage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
   {
    path: "/Shoes",
    element: <ShoesTable />,
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;