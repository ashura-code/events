import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Cookies from 'js-cookie';
import './index.css';

import Home from './routes/Home.jsx';
import Error from './routes/errorpage.jsx';
import Navbar from './components/Navbar.jsx';
import EventPage from './routes/event-page.jsx';
import Login from './routes/login.jsx';
import Signup from './routes/signup.jsx';
import Tickets from './routes/tickets.jsx';
import Register from './routes/register.jsx';
import Searchres from './routes/searchres.jsx';
import Profile from './routes/profile.jsx';
import Footer from "./components/Footer.jsx"

const Layout = ({ children }) => {
  // You can include common components like Navbar here
  return (
    <div>
      {/* <Navbar /> */}
      {children}
      <Footer/>
    </div>
  );
};

const routes = [
  {
    path: '/',
    element: <Layout><Home /></Layout>,
    errorElement: <Error />,
  },
  {
    path: '/event/:id',
    element: <Layout><EventPage /></Layout>,
  },
  {
    path: '/login',
    element: <Layout><Login /></Layout>,
  },
  {
    path: '/signup',
    element: <Layout><Signup /></Layout>,
  },
  {
    path: '/search/:id',
    element: <Layout><Searchres /></Layout>,
  },
];

// Simple protected routes
if (Cookies.get('username')) {
  routes.push(
    {
      path: '/your-tickets',
      element: <Layout><Tickets /></Layout>,
    },
    {
      path: '/event/:id/register',
      element: <Layout><Register /></Layout>,
      errorElement: <Error />,
    },
    {
      path: '/profile',
      element: <Layout><Profile /></Layout>,
      errorElement: <Error />,
    }
  );
}

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
