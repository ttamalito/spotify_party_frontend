import {useParams} from "react-router-dom";
import {useState} from "react";

export default function JoinParty() {

    // get the party_id
    const params = useParams();
    const partyId = params.id;

    const header = <h1>Would you like to join party: {partyId}</h1>
    const joinButton = <button onClick={() => {joinParty(partyId, setShowRequested)}}>Join!</button>
    const requested = <h2>Access to the party has been requested, wait for the owner to let you in</h2>
    let [showRequested, setShowRequested] = useState(false);
    return (
        <>
            {!showRequested && header}
            {!showRequested && joinButton}
            {showRequested && requested}
        </>
    )
} // end of componenet


/**
 * Sends the get request to join the party
 * @param partyId
 * @param {Function} setShowRequested
 */
function joinParty(partyId, setShowRequested) {

    fetch(`http://localhost:8080/joinParty/${partyId}`, {
        method: 'GET',
        credentials: 'include'
    }).then(res => {
        console.log(`Response Code: ${res.status}`);
        if (res.status === 200) {
            // everything went alright, user was added to the queue to join the party
            //window.location.href = '/'
            setShowRequested(true);
        }
        // get the json response
        res.json().then(data => {
            console.log(data)
        })
    }).catch(err => console.error(err));
} // end of join party