import React from "react";
import {Route, Routes} from "react-router-dom";
// import the pages
import LandingParty
    from "../pages/party/LandingParty";
import PlayWithParty
    from "../pages/party/PlayWithParty";
import StartParty
    from "../pages/party/StartParty";
import JoinParty from "../pages/party/JoinParty";
import ManageParty
    from "../pages/party/ManageParty";



/**
 * Contains all the routes regarding some authentication
 * @return {Element}
 * @constructor
 */
export default function PartyRoutes() {

    return (<Routes>
        <Route exact path='/party' element={<LandingParty />}/>
        <Route exact path={'/party/:id'} element={<PlayWithParty/>} />
        <Route exact path={'/startParty'} element={<StartParty />} />
        <Route exact path={'/joinParty/:id'} element={<JoinParty /> } />
        <Route exact path={'/manageParty/:id'} element={<ManageParty />} />
    </Routes>);
}