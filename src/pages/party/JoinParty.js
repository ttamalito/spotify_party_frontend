import {useParams} from "react-router-dom";

export default function JoinParty() {
    // get the party_id
    const params = useParams();
    const partyId = params.id;

    const header = <h1>Would you like to join party: {partyId}</h1>
    const joinButton = <button onClick={() => {joinParty(partyId)}}>Join!</button>

    return (
        <>
            {header}
            {joinButton}
        </>
    )
} // end of componenet


/**
 * Sends the get request to join the party
 * @param partyId
 */
function joinParty(partyId) {

    fetch(`http://localhost:8080/joinParty/${partyId}`, {
        method: 'GET',
        credentials: 'include'
    }).then(res => {
        console.log(`Response Code: ${res.status}`);
        // get the json response
        res.json().then(data => {
            console.log(data)
        })
    }).catch(err => console.error(err));
} // end of join party