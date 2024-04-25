import {useParams} from "react-router-dom";
import {useEffect, useRef, useState} from "react";

export default function ManageParty() {
    useEffect(() => {
        isOwner(setOwnerRef, partyId);
    }, [isOwnerRef]);
    const [isOwnerRef, setOwnerRef] = useState(false);
    // get the id
    const params = useParams();
    const partyId = params.id;

    const notOwner = <h1>You are forbidden to go to this page</h1>
    const seeRequestToJoinPendingButton = <button
        >See the people that requested to join the party</button>

    const everything = <div>
        {seeRequestToJoinPendingButton}
    </div>

    return (
        <>
            {!isOwnerRef && notOwner} 
            {isOwnerRef && everything}
        </>
    )
}

/**
 *
 * @param {Function} setOwnerRef
 * @param partyId
 */
function isOwner(setOwnerRef, partyId) {
    // send the request
    fetch(`http://localhost:8080/isOwner/${partyId}`, {
        method: 'GET',
        credentials: 'include'
    }).then(res => {
        console.log(res.status);
        if (res.status === 200) {
            setOwnerRef(true);
        }
    })
}