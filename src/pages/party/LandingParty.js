import {useEffect} from "react";

export default function LandingParty() {
    useEffect(() => {
        requestToStartParty();
    }, []);

    const header = <h1>Landing Page for party</h1>

    return (<>
        {header}
    </>)
}

/**
 * Sends the corresponding request, to start a party to the backend server
 */
function requestToStartParty() {
    fetch(`http://localhost:8080/party`, {
        method: 'GET',
        credentials: "include"

    }).then(res => {
        // check if redirected is needed
        const location = res.headers.get("Location");
        console.log(location);
        // log the response
        console.log(res);
        res.text().then(txt => console.log(txt));
    }).catch(err =>  console.error(err));
} // end of requestToStartParty