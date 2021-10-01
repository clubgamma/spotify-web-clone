import { Switch, Route } from "react-router-dom";

import ArtistPage from "../ArtistScreen/Artist";
import HomePage from "../HomeScreen/Home";
import LoginPage from "../LoginScreen/Login";
import PlaylistPage from "../PlaylistScreen/Playlist";
import SignupPage from "../SignupScreen/Signup";
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
