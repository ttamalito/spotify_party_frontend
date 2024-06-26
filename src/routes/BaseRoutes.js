import React from "react";
import {Route, Routes} from "react-router-dom";
import Home from "../pages/Home";



/**
 * Contains all the routes regarding some authentication
 * @return {Element}
 * @constructor
 */
export default function BaseRoutes() {

    return (<Routes>
        <Route exact path={'/'} element={<Home />} />
    </Routes>);
}