import {BrowserRouter} from "react-router-dom";

import AuthenticationRoutes
  from "./routes/AuthenticationRoutes";
import PartyRoutes from "./routes/PartyRoutes";
import BaseRoutes from "./routes/BaseRoutes";

function App() {
  // how to change the title of the webpage
  document.title = 'Spotify Party';

  return (
  <BrowserRouter>
    <BaseRoutes />
    <AuthenticationRoutes />
    <PartyRoutes />
  </BrowserRouter>
  );
}



export default App;
