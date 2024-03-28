import {BrowserRouter} from "react-router-dom";

import AuthenticationRoutes
  from "./routes/AuthenticationRoutes";

function App() {
  // how to change the title of the webpage
  document.title = 'Spotify Party';

  return (
  <BrowserRouter>
    <AuthenticationRoutes />
  </BrowserRouter>
  );
}



export default App;
