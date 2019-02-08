import React from "react";
import { Spinner, Container } from "./Loader.styled";

const Loader = (props: any) => {
  return (
    <Container>
      <Spinner size={props.size} />
    </Container>
  );
};

export default Loader;
