import logo from "./logo.svg";
import "./App.css";
import { Navigate, RouterProvider, createBrowserRouter, createHashRouter } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Home from "./Components/Home/Home";
import Register from "./Components/Register/Register";
import Login from "./Components/Login/Login";
import All from "./Components/All/All";
import GameDetails from "./Components/GameDetails/GameDetails";
import Platform from "./Components/Platform/Platform";
import Category from "./Components/category/Category";
import Loadindscreen from "./Components/LoadingScreen/Loadindscreen";
import { useEffect, useState } from "react";
import jwtDecode from "jwt-decode";




function App() {

  const [crrUser, setcrrUser] = useState(null);
  
  function getUserData(){
    if(localStorage.getItem("user")!=null){
      setcrrUser(jwtDecode(localStorage.getItem("user")));
    }
  }
  function deleteUser(){
    localStorage.removeItem("user");
    setcrrUser(null);
  }
  function ProtectedRoute({children}){
    if(localStorage.getItem("user")==null){
       return <Navigate to='/login'/>    
    }else{
      return children;
    }
  }
  function reloud(){
      if(crrUser==null&&localStorage.getItem("user")==null){
        getUserData();
      }
      console.log("welcome");
  }
  const router = createHashRouter([
    {
      path: "",
      element: <Layout crrUser={crrUser} deleteUser={deleteUser} />,
      children: [
        {
          path: "",
          element: <ProtectedRoute user={crrUser}><Home /></ProtectedRoute>,
        },
        {
          path: "/home",
          element: <ProtectedRoute user={crrUser}><Home /></ProtectedRoute>,
        }, {
          path: "/all",
          element: <ProtectedRoute><All /></ProtectedRoute>,
        },{
          path: "/gamedetails/:id",
          element:<ProtectedRoute> <GameDetails /></ProtectedRoute>,
        },{
          path: "/platform/:path",
          element: <ProtectedRoute><Platform /></ProtectedRoute>,
        },{
          path: "/category/:path",
          element: <ProtectedRoute><Category /></ProtectedRoute>,
        },{
          path: "/login",
          element: <Login crruser={crrUser} getUserData={getUserData}/>,
        },{
          path:"/register",element:<Register/>
        },{
          path:"*",element:<><div className="text-center">page not found</div></>
        }
      ],
    },
  ]);
  useEffect(function(params) {
    reloud();
    getUserData();
  },[])
  return <RouterProvider router={router}>

  </RouterProvider>;
}

export default App;
