
import createUrlParams
    from "../utils/createURLParams";

export default function Login() {

    const form = <form onSubmit={(event) => submitForm(event)}>
        <input type="text" name={"email"} placeholder={"email"} />
        <input type={"text"} name={"password"} placeholder={"password"}/>
        <button type={"submit"}>Login</button>
    </form>

    return (<>
        <h1>Login</h1>
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
        document.cookie = "username=Pepinon";
        for (let [i, j] of res.headers.entries()) {
            console.log(`${i}: ${j}`);
        }
        let token = res.headers.get("login");
        console.log(token);
        res.text().then(txt => {
            console.log(txt);
            document.cookie = txt;
        });
    })
}

