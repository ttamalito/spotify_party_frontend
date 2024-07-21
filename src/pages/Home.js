import {useEffect, useState} from "react";

export default function Home() {

    const [hasParty, setHasParty] = useState([false, ""]);
    useEffect(() => {
        checkUserHasParty(setHasParty);
    }, []);
    const startParty = <a href={'/startParty'}>Start a Party</a>
    const loginLink = <a href={'/login'}>Login</a>
    return (<>
        <h1>Home</h1>
        {loginLink}
        <br/>
        {!hasParty[0] && 'You have no Party, start one or login to display your owned party'}
        <br/>
        {!hasParty[0] && startParty}
        <br/>
        {hasParty[0] && <a href={`/party/${hasParty[1]}`}>Go to your party</a>}
    </>);
}


function checkUserHasParty(setHasParty) {

    fetch(`http://localhost:8080/userHasParty`, {
        method: 'GET',
        credentials: 'include',
    }).then(res => {
        // data
        res.json().then(data => {
            console.log(data)
            if (data.result) {
                const party_id = data.party_id;
                setHasParty([true, party_id]);
            }
        })
    }).catch(err => console.error(err)); // end of fetch
}