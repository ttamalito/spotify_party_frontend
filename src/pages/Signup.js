import createUrlParams
    from "../utils/createURLParams";

export default function Signup() {
    const form = <form onSubmit={(event) => submitForm(event)}>
        <input type="text" name={"name"}/>
        <input type="text" name={"email"} />
        <input type={"text"} name={"password"}/>
        <button type={"submit"}>Sign up</button>
    </form>

    return (<>
        {form}
    </>);
} // end of Login

/**
 * Sends a Post Request to signup
 * @param {Event} event
 */
function submitForm(event) {
    event.preventDefault();
    const urlData = createUrlParams(event.nativeEvent.srcElement);

    // send it
    fetch(`http://localhost:8080/signup`, {
        method: "POST",
        redirect: 'follow',
        credentials: 'include',
        body: urlData,
    }).then(res => {
        console.log(res); // log the response
        // see the response body
        res.json().then(data => {
            console.log(data)
            if (data.result && data.redirected) {
                window.location.href = data.url;
            }

        })
    }).catch(err => {console.error(err)})
} // end of submitForm