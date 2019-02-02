import React from "react";
import { Route, Switch } from "react-router-dom";
import { Container } from "./App.styled";
import Login from "../Login";
import TopTracks from "../TopTracks";
import CreatePlaylistWizard from "../CreatePlaylistWizard";

const App = () => {
  return (
    <Container>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/" component={TopTracks} />
      </Switch>
      <CreatePlaylistWizard />
    </Container>
  );
};

export default App;
