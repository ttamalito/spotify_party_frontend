import {useEffect} from "react";
import { useLocation } from 'react-router-dom';
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
    let queryParams = new URLSearchParams(useLocation().search);
    let code = queryParams.get("code");
    console.log(code)
    const header = <h1>Landing Page for party with code</h1>
    const form = <form onSubmit={(event) => submitForm(event, code)}>
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
 * Sends a P
 * @param {Event} event
 * @param {String} code The code that was recieved, when the user authorized the app
 */
function submitForm(event, code) {
    event.preventDefault();
    const urlData = createUrlParams(event.nativeEvent.srcElement);
    // append all the necessary data

    urlData.append('code', code);
    urlData.append('grant_type', 'authorization_code');
    urlData.append('redirect_uri', 'http://localhost:3000/party');
    // send it
    fetch(`http://localhost:8080/createParty`, {
        method: "POST",
        credentials: 'include',
        body: urlData,
        headers: {
            'content-type': 'application/x-www-form-urlencoded'
            //'Authorization': 'Basic ' + (new Buffer.from(urlData.get('id') + ':' + urlData.get('secret')).toString('base64'))
        }
    }).then(res => {
        console.log(res); // log the response
        if (res.status === 403) {
            alert("You already have a party");
            return;
        }
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
                // redirect, given the party_id
                window.location.href = `/party/${data.party_id}`;
            }
        }) // then of json
    }).catch(err => console.error(err));
} // submitForm