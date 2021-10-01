import { Switch, Route } from "react-router-dom";

import Artist from "../Artist/Artist";
import Home from "../Home/Home";
import Login from "../Login/Login";
import Playlist from "../Playlist/Playlist";
import Signup from "../Signup/Signup";

const Layout = () => {
  return (
    <Switch>
      <Route path="/signup" exact component={Signup} />
      <Route path="/login" exact component={Login} />
      <Route path="/playlist" exact component={Playlist} />
      <Route path="/artist" exact component={Artist} />
      <Route path="/" exact component={Home} />
    </Switch>
  );
};

export default Layout;
