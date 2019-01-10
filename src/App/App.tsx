import React from "react";
import { Route } from "react-router-dom";
import { Container } from "./App.styled";
import Login from "../Login";
import TopTracks from "../TopTracks";

const App = () => {
  return (
    <Container>
      <Route path="/login" component={Login} />
      <Route exact path="/" component={TopTracks} />
    </Container>
  );
};

export default App;
