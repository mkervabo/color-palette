import { useState } from 'react'
import Header from './Header'
import Home from './Home'
import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet
} from "react-router-dom"

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
        path: "/hello",
        element: <div>Hello world!</div>,
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
