import React from "react";
import {Route, Routes} from "react-router-dom";
// import the pages
import LandingParty
    from "../pages/party/LandingParty";
import ManageParty
    from "../pages/party/ManageParty";
import StartParty
    from "../pages/party/StartParty";



/**
 * Contains all the routes regarding some authentication
 * @return {Element}
 * @constructor
 */
export default function PartyRoutes() {

    return (<Routes>
        <Route exact path='/party' element={<LandingParty />}/>
        <Route exact path={'/party/:id'} element={<ManageParty/>} />
        <Route exact path={'/startParty'} element={<StartParty />} />
    </Routes>);
}