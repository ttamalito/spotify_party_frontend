import {useEffect} from "react";

export default function Response() {
    useEffect(() => {
        fetch(`http://localhost:8080/response`, {
            method: 'GET',
            credentials: 'include'
        }).then(res => {
            console.log(res);
            res.text().then(txt => console.log(txt));
        })
    }, []);

    const what = <h1>Hello From Response</h1>

    return (<>
        {what}
    </>);
} // end of Login
