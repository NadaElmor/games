import React, { useEffect } from 'react';
import Home from '../Home/Home';
import { Outlet } from 'react-router-dom';
import Nav from '../Nav/Nav';


document.body.style = 'background: #272B30;';
function Layout({crrUser,deleteUser}) {

    useEffect(function(){
        document.body.style.color='#AAAAAA';
    },[])
    return <>
    <Nav crrUser={crrUser} deleteUser={deleteUser}/>
    <Outlet/>
 </>
}

export default Layout;

// style={{'backgroundColor':'#272B30'}}