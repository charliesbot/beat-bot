import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "./App.styled";
import Login from "../Login";
import TopTracks from "../TopTracks";

const App = () => {
  return (
    <Router>
      <Container>
        <Route path="/login" component={Login} />
        <Route exact path="/" component={TopTracks} />
      </Container>
    </Router>
  );
};

export default App;
