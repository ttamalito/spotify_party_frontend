import {useParams} from "react-router-dom";

export default function PlayWithParty() {
    // get the id
    const params = useParams();
    const partyId = params.id;

    // pause playback
    let pauseButton = <button onClick={()=> {pausePlayback(partyId)}}> Pause Playback</button>

    // resume playback
    let resumeButton = <button  onClick={resumePlayback}> Resume Play back</button>

    let playNextButton = <button  onClick={playNext}> Play Next</button>

    let previousButton =  <button  onClick={playPrevious}> Play Previous</button>

    let modifyVolumeButton = <button  onClick={modifyVolumeg}> Modify Volume</button>
    return (
        <>
            <h1>Manage your party</h1>
            {pauseButton}
            {resumeButton}
            {playNextButton}
            {previousButton}
            {modifyVolumeButton}
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


function resumePlayback() {

    fetch(`http://localhost:8080/resumePlayback`, {
        method: 'GET',
        credentials: 'include',
    }).then(res => {
        console.log(res);
        if (res.status === 204)
            alert('Playback Resumed')
        if (res.status === 400 || res.status === 403 || res.status === 401 || res.status === 409) {
            // a bad request
            alert('A bad reqeust');
            console.log("Verga!")
        }
    }).catch(err => console.error(err)); // end of fetch
}

function playNext() {
    fetch(`http://localhost:8080/playNext`, {
        method: 'GET',
        credentials: 'include',
    }).then(res => {
        console.log(res);
        if (res.status === 204)
            alert('Next played')
        if (res.status === 400 || res.status === 403 || res.status === 401 || res.status === 409) {
            // a bad request
            alert('A bad reqeust');
            console.log("Verga!")
        }
    }).catch(err => console.error(err)); // end of fetch
}

function playPrevious() {
    fetch(`http://localhost:8080/playPrevious`, {
        method: 'GET',
        credentials: 'include',
    }).then(res => {
        console.log(res);
        if (res.status === 204)
            alert('Previous played')
        if (res.status === 400 || res.status === 403 || res.status === 401 || res.status === 409) {
            // a bad request
            alert('A bad reqeust');
            console.log("Verga!")
        }
    }).catch(err => console.error(err)); // end of fetch
}

function modifyVolume() {
    fetch(`http://localhost:8080/modifyVolume`, {
        method: 'GET',
        credentials: 'include',
    }).then(res => {
        console.log(res);
        if (res.status === 204)
            alert('Volume modified')
        if (res.status === 400 || res.status === 403 || res.status === 401 || res.status === 409) {
            // a bad request
            alert('A bad reqeust');
            console.log("Verga!")
        }
    }).catch(err => console.error(err)); // end of fetch
}
/*
fetch(`https://api.spotify.com/v1/me/player/pause`, {
    method: 'PUT',
    headers: {
        'Authorization': 'Bearer BQDRdaFo_ZUpf4HCGcr9buBs6JjoWmb3SbHzBkH4k9wTFUNnXd4BnQJciSI7lw7_bjkqYC35HUqNbGXe70s8ejQrFtUs_Un6GhrlKyToqyPS5ydikIAhljXqaKfeMb_86e7H5q447x93xcJdFX0apE2HoMys9ynBBUOLlBhoZltj9BTO27wWQd9QwFQ'}

}).then(res => {
    console.log(res);
    res.text().then(data => {console.log(data)})
})
 */
