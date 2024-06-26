import React from "react";
import {Route, Routes} from "react-router-dom";


import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Response from "../pages/Response";

/**
 * Contains all the routes regarding some authentication
 * @return {Element}
 * @constructor
 */
export default function AuthenticationRoutes() {

    return (<Routes>
        <Route exact path='/login' element={<Login />}/>
        <Route exact path={'/signup'} element={<Signup />} />
        <Route exact path={'/response'} element={<Response/>} />
    </Routes>);
}