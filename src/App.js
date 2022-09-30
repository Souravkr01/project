import React from 'react';
import CreatePost from './CreatePost';
import ReactDOM from "react-dom/client";
import LoginPage from './LoginPage';
import './index.css'
import Nav from './Nav'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";

const mainStyle = {
  fontSize:"30px", margin:"30px", 
  backgroundColor: '#FF6666',
  background:'linear-gradient(to top left, #ccffff 0%, #ffffff 100%)', 
  height:"520px",
  flex:'1',
  alignItems:"center",
  justifyContent:"center"
}



const router = createBrowserRouter([
  {
    path: "/",
    element: <div style={mainStyle}><h1 style={{marginLeft:"610px", marginTop:"40px"}}>Welcome! </h1><a href="/login" className="login" >Go to login Page</a> </div>,
  },
  {
    path:"/login",
    element:<LoginPage/>
  },
  {
    path: "/post",
    element: <CreatePost/>
  }
]);

function App()
{
  return(
    <React.StrictMode>
      <Nav/>
    <RouterProvider router={router} />
  </React.StrictMode>
  )
}

export default App;
