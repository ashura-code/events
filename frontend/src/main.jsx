import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './routes/Home.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Error from './routes/errorpage.jsx';
import Navbar from './components/Navbar.jsx';
import EventPage from './routes/event-page.jsx';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <Error />,
  },
  {
    path: '/event/:id',
    element: <EventPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
