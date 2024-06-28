import createUrlParams
    from "../../utils/createURLParams";


export default function StartParty() {
    const header = <h1>Start a party</h1>
    const form = <form onSubmit={(event) => redirectToLogin(event)}>
        <input type="text" name={"id"} placeholder={"Client ID"} />
        <button type={"submit"}>GO to authorize</button>
    </form>
    return (<>
        {header}
        {form}
    </>)
}


/**
 * Sends the corresponding request, to start a party to the backend server
 */
function redirectToLogin(event) {
    event.preventDefault();
    // get the form data
    const formData = new FormData(event.nativeEvent.srcElement);
    //const urlData = createUrlParams();
    let responseType = `response_type=code`;
    let client_id = `client_id=${formData.get("id")}`;
    let scopes = [
        "user-read-playback-state",
        "user-modify-playback-state",
        "user-read-currently-playing",
       "app-remote-control",
       //"streaming",
      //"playlist-read-private",
       "playlist-modify-private",
        //"user-follow-modify",
       //"user-follow-read",
        "user-read-playback-position",
        //"user-top-read",
        "user-read-recently-played",
        //"user-library-modify",
        //"user-library-read",
        "user-read-email",
        //"user-read-private",
        //"user-soa-link",
        //"soa-create-partner",
    ];
    let scope = 'scope=';
    console.log(`Length of scopes: ${scopes.length}`);
    for (let i = 0; i < scopes.length; i++) {
        if (i === 0) {
            // the first one
            scope += scopes[i];
            console.log(`After the first iteration: ${scope}`);
            continue;
        }
        // else
        scope += "+"  + `${scopes[i]}`;
        console.log(`At the ${i}th iteration: ${scope}`);
    } // end of for loops
    console.log(scope);
    let redirectURI = `redirect_uri=http://localhost:3000/party`;

    let queryParams = responseType + '&' + client_id + '&' + scope + '&' + redirectURI;
    console.log(queryParams);

    let url = `https://accounts.spotify.com/authorize?${queryParams}`;
    console.log(url);
    // redirect to that page
    window.location.href = url;

} // end of requestToStartParty