
import createUrlParams
    from "../utils/createURLParams";

export default function Login() {
    const form = <form onSubmit={(event) => submitForm(event)}>
        <input type="text" name={"email"} />
        <input type={"text"} name={"password"}/>
        <button type={"submit"}>Login</button>
    </form>

    return (<>
        {form}
    </>);
} // end of Login

/**
 * Sends a P
 * @param {Event} event
 */
function submitForm(event) {
    event.preventDefault();
    const urlData = createUrlParams(event.nativeEvent.srcElement);

    // send it
    fetch(`http://localhost:8080/login`, {
        method: "POST",
        redirect: 'follow',
        body: urlData,
    }).then(res => {
        console.log(res); // log the response
    })
}

