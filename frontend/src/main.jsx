import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './routes/Home.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Error from './routes/errorpage.jsx';
import Navbar from './components/Navbar.jsx';
import EventPage from './routes/event-page.jsx';
import Login from './routes/login.jsx';
import Signup from './routes/signup.jsx';
import Tickets from './routes/tickets.jsx';
import Register from './routes/register.jsx';
import './index.css';
import Cookies from 'js-cookie';
import Searchres from "./routes/searchres.jsx"
import UserProfile from "./routes/userprofile.jsx"
import Policy from "./routes/policy.jsx"

const routes = [
  {
    path: '/',
    element: <Home />,
    errorElement: <Error />,
  },
  {
    path: '/event/:id',
    element: <EventPage />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/signup',
    element: <Signup />,
  },
  { 
    path: "/search/:id",
    element:<Searchres/>
  },
  {
    path:"/privacy policy",
    element:<Policy/>
  }
];

// simple protected routes
if (Cookies.get('username')) {
  routes.push(
    {
      path: '/your-tickets',
      element: <Tickets />,
    },
    {
      path: '/event/:id/register',
      element: <Register />,
      errorElement: <Error />,
    },
    {
       path:"/profile",
       element:<UserProfile/>,
       errorElement:<Error/>

    },
  );
}

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
