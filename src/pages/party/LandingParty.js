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
    fetch(`http://localhost:8080/puto2`, {
        method: 'GET',
        credentials: "include"

    }).then(res => {
        // check if redirected is needed.
        for (let [i, j] of res.headers.entries()) {
            console.log(`${i}: ${j}`);
        }
        const location = res.headers.get("location");
        console.log(location);
        // log the response
        console.log(res);
        res.json().then(data => {
            // it is an object
            if (data.link) {
                // there is a link to redirect
                window.location.href = data.link;
            }
        });
    }).catch(err =>  console.error(err));
} // end of requestToStartParty