import React, { useContext } from 'react';
import {Routes, Route, Navigate, redirect} from 'react-router-dom'
import {authRoutes, publicRoutes} from "../routes"
import { UserContext } from '../AuthContext';

const AppRouter = () => {
    const { isLoggedIn } = useContext(UserContext)
  
    return (
        <Routes>
            {isLoggedIn && authRoutes.map(({path, Component}) =>
                <Route key={path} path={path} element={<Component/>} exact/>
            )}
            {publicRoutes.map(({path, Component, isRegistering}) =>
                <Route key={path} path={path} element={<Component  isRegistering={isRegistering} />} exact/>
            )}
             <Route path="*" element={<Navigate to='/login'/>}/>
        </Routes>
    );
}

export default AppRouter;
