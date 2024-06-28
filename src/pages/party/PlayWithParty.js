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

    let modifyVolumeButton = <button  onClick={modifyVolume}> Modify Volume</button>


    let turnOnShuffleButton = <button onClick={turnOnShuffle}> Turn on Shuffle</button>
    return (
        <>
            <h1>Manage your party</h1>
            <br/>
            {pauseButton}
            <br/>
            {resumeButton}
            <br/>
            {playNextButton}
            <br/>
            {previousButton}
            <br/>
            {modifyVolumeButton}
            <br/>
            {turnOnShuffleButton}
        </>
    )
} // end of Component
/**
 * Pause playback of the party with the given party ID.
 *
 * @param {type} partyId - The ID of the party to pause playback for
 * @return {type} Not specified in the function
 */
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

/**
 * Resumes playback of the audio.
 *
 * @return {Promise<void>} A promise that resolves when the playback is resumed.
 */
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
/**
 * Sends a request to play the next song in the playlist.
 *
 * @return {Promise<void>} A promise that resolves when the next song is played.
 */
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
/**
 * Sends a request to play the previous song in the playlist.
 *
 * @return {Promise<void>} A promise that resolves when the previous song is played.
 */
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
/**
 * Sends a GET request to modify the volume and displays an alert with the result.
 *
 * @return {Promise<void>} A promise that resolves when the volume is modified or an error occurs.
 */
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


function turnOnShuffle() {
    fetch(`http://localhost:8080/shuffleOn`, {
        method: 'PUT',
        credentials: 'include'
    }).then(res => {
        console.log(res);
        if (res.status === 204)
            alert('Shuffle Mode On')
        if (res.status === 400 || res.status === 403 || res.status === 401 || res.status === 409)
            alert(`Status of the request: ${res.status}`)
    }).catch(err => console.error)
}
