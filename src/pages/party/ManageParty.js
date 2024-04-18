import {useParams} from "react-router-dom";

export default function ManageParty() {
    // get the id
    const params = useParams();
    const partyId = params.id;

    // pause playback
    let pauseButton = <button onClick={()=> {pausePlayback(partyId)}}> Pause Playback</button>

    return (
        <>
            <h1>Manage your party</h1>
            {pauseButton}
        </>
    )
} // end of Component

function pausePlayback(partyId) {
    const urlBody = new URLSearchParams();
    urlBody.append('party_id', partyId);
    fetch(`http://localhost:8080/pausePlayback`, {
        method: 'POST',
        credentials: 'include',
        body: urlBody
    }).then(res => {
        console.log(res);
        if (res.status === 204)
            alert('Playback Paused')
        if (res.status === 400 || res.status === 403 || res.status === 401 || res.status === 409) {
            // a bad request
            alert('A bad reqeust');
            console.log("Verga!")
        }
    }).catch(err => console.error(err)); // end of fetch
}