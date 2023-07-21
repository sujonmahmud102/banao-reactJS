import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css';
import Home from './pages/Home/Home/Home.jsx';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Main from './pages/Layout/Main';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoggedIn from './pages/Layout/LoggedIn';
import CreateAccount from './pages/components/SignUp/CreateAccount';
import SignIn from './pages/components/SignIn/SignIn';




const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: '/',
        element: <Home />
      }
    ]
  },
  {
    path: "/logged-in",
    element: <LoggedIn />,
  },
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
