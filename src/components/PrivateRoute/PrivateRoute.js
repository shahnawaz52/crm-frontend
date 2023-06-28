import React, { Children } from 'react'
import { Route, Routes, Navigate } from "react-router-dom";
import DefaultLayout from '../../layout/DefaultLayout';
import Dashboard from '../../pages/dashboard/Dashboard';

const isAuth = true;
const PrivateRoute = ({ element: children, ...rest }) => {
    console.log({ ...rest })
    console.log(children)
    return (
        <Routes>
            <Route
                {...rest}
                element={isAuth ? <DefaultLayout>{children}</DefaultLayout> : (<Navigate to="/" />)}
            />
        </Routes>
    )
}

export default PrivateRoute;
