export default function Home() {

    const startParty = <a href={'/startParty'}>Start a Party</a>
    const loginLink = <a href={'/login'}>Login</a>
    return (<>
        <h1>Home</h1>
        {loginLink}
        <br/>
        {startParty}
    </>);
} // end of Login