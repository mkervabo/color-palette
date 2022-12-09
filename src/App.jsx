import { useState } from 'react'
import Header from './Header'
import Home from './Home'
import Generator from './Generator'
import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
  useNavigate
} from "react-router-dom"

// const loader = async () => {
//   console.log('hey')
//   const navigate = useNavigate()
//   navigate("/palettes/coucou")
//   return null
// };

const router = createBrowserRouter([
  {
    path: "/", 
    element: <NavbarWrapper/>,
    children:[
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/palettes/:colors",
        element: <Generator />
      },
      {
        path: "/palettes",
        element: <Generator />,
        // loader: loader
      }
    ],
  }
]);

function NavbarWrapper(){
  return (
  <>
      <Header/>
      <Outlet/>
  </>
  )
};

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
