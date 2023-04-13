import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Taskpage from './Taskpage';
import Outlet from './Layout/Outlet';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AuthProvider from './Context/AuthContext';
import { TimerProvider } from './Context/TimerContex';
import ForgotPassword from '../components/Auth/forgot-password';
import Login from '../components/Auth/Login';
import Signup from '../components/Auth/Signup';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Outlet/>,
    children: [{
                  path: "/",
                  element: <App/>,
                },
                {
                  path: "/taskpage",
                  element: <Taskpage/>,
                },
                {
                  path: "/forgot-password",
                  element: <ForgotPassword/>,
                },
                {
                  path: "/login",
                  element: <Login/>,
                },
                {
                  path: "/signup",
                  element: <Signup/>,
                }
              ]}

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <AuthProvider>
    <TimerProvider>

    <RouterProvider router={router} />

    </TimerProvider>
    </AuthProvider>
  </React.StrictMode>,
)
