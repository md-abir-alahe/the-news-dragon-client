/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { user } = useContext(AuthContext);
    const location = useLocation();
    console.log(location);
    if (user) {
        return children;
    }

    return <Navigate state={{ from: location }} to={`/login`} replace></Navigate>
};

export default PrivateRoute;
/****
 * ------------
 * steps
 * ------------
 * 1. check user is logged in or not
 * 2. if user is logged in, then allow them to visit the route
 * 3. else redirect the user to the login page
 * 4. setup private route
 *  */ 