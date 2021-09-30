import { Switch, Route } from "react-router-dom";

import {
  HomePage,
  SignupPage,
  LoginPage,
  PlaylistPage,
  ArtistPage,
} from "./pages";
import "./App.css";

function App() {
  return (
    <Switch>
      <Route path="/signup" exact component={SignupPage} />
      <Route path="/login" exact component={LoginPage} />
      <Route path="/playlist" exact component={PlaylistPage} />
      <Route path="/artist" exact component={ArtistPage} />
      <Route path="/" exact component={HomePage} />
    </Switch>
  );
}

export default App;
