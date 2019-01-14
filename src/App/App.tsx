import React from "react";
import { Route, Switch } from "react-router-dom";
import { Container } from "./App.styled";
import Login from "../Login";
import TopTracks from "../TopTracks";

const App = () => {
  return (
    <Container>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/" component={TopTracks} />
      </Switch>
    </Container>
  );
};

export default App;
