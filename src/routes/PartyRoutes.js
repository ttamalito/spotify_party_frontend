import React from "react";
import {Route, Routes} from "react-router-dom";
// import the pages
import LandingParty
    from "../pages/party/LandingParty";



/**
 * Contains all the routes regarding some authentication
 * @return {Element}
 * @constructor
 */
export default function PartyRoutes() {

    return (<Routes>
        <Route exact path='/party' element={<LandingParty />}/>
    </Routes>);
}