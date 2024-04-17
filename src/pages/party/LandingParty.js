import {useEffect} from "react";
import requestAccessToken
    from "../../utils/requestAccessToken";
import createUrlParams
    from "../../utils/createURLParams";
import getUtcDate from "../../utils/utcDate";

export default function LandingParty() {
    useEffect(() => {
        //requestToStartParty();
        //requestAccessToken();
    }, []);

    const header = <h1>Landing Page for party</h1>
    const form = <form onSubmit={(event) => submitForm(event)}>
        <input type="text" name={"id"} placeholder={"Client ID"} />
        <input type={"text"} name={"secret"} placeholder={"Client Secret"}/>
        <button type={"submit"}>Request Token</button>
    </form>
    return (<>
        {header}
        {form}
    </>)
}

/**
 * Sends the corresponding request, to start a party to the backend server
 */
function requestToStartParty() {
    fetch(`http://localhost:8080/createParty`, {
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
            if (data.redirected) {
                // there is a link to redirect
                window.location.href = data.link;
            }
        });
    }).catch(err =>  console.error(err));
} // end of requestToStartParty

/**
 * Sends a P
 * @param {Event} event
 */
function submitForm(event) {
    event.preventDefault();
    const urlData = createUrlParams(event.nativeEvent.srcElement);

    // send it
    fetch(`http://localhost:8080/createParty`, {
        method: "POST",
        credentials: 'include',
        body: urlData,
    }).then(res => {
        console.log(res); // log the response
        // extract the json
        res.json().then(data => {
            console.log(data);
            if (!data.result) {
                // not successful
                if (data.redirected !== "") {
                    window.location.href = data.url;
                }
                // check the status
                if (res.status === 500) {
                    alert("Internal server Error, check the rust code");
                }
            }// negative result
            else {
                // it was a positive result
                // add the access token as a cookie
                let date = getUtcDate(3600000); // 1 hour
                document.cookie = `access=${data.access_token}; expires=${date}`;
            }
        }) // then of json
    }).catch(err => console.error(err));
} // submitForm