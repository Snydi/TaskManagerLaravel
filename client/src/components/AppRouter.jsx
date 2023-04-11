import React, { useContext } from 'react';
import {Routes, Route, Navigate, redirect} from 'react-router-dom'
import {authRoutes, publicRoutes} from "../routes"
import { UserContext } from '../AuthContext';
import MyLoader from './UI/Loader/myLoader';

const AppRouter = () => {
   const { isLoggedIn } = useContext(UserContext)
    
    

    return (
        isLoggedIn ?
        <Routes>
            {isLoggedIn && authRoutes.map(({path, Component}) =>
                <Route key={path} path={path} element={<Component/>} exact/>
            )}
            
             <Route path="*" element={<Navigate to='/'/>}/>
        </Routes>
        :
        <Routes>
        {publicRoutes.map(({path, Component, isRegistering}) =>
                <Route key={path} path={path} element={<Component  isRegistering={isRegistering} />} exact/>
            )}

        <Route path="*" element={<Navigate to='/login'/>}/>

        </Routes>
    );
}

export default AppRouter;
