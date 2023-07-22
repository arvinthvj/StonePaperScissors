import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import LandingPage from "./LandingScreen";
import Play from "./PlayScreen/Play";
import "./App.css"
import GamerData from "./DataScreen/GamerData";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path = "/" exact>
            <LandingPage/>
          </Route>
          <Route path = "/play">
            <Play/>
          </Route>
          <Route path = "/gameData">
            <GamerData/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
